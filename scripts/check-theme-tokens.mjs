import fs from "node:fs/promises"
import path from "node:path"

const ROOT = process.cwd()
const SRC = path.join(ROOT, "src")

const FORBIDDEN_PATTERNS = [
  /\bbg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3}\b/g,
  /\btext-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3}\b/g,
  /\bborder-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3}\b/g,
  /#(?:[0-9a-fA-F]{3}){1,2}\b/g,
]

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "dist") continue
      yield* walk(fullPath)
      continue
    }
    if (!/\.(ts|tsx|css)$/.test(entry.name)) continue
    yield fullPath
  }
}

function toRelative(p) {
  return path.relative(ROOT, p).replaceAll("\\", "/")
}

const violations = []

for await (const filePath of walk(SRC)) {
  const content = await fs.readFile(filePath, "utf8")
  for (const pattern of FORBIDDEN_PATTERNS) {
    const matches = content.match(pattern)
    if (matches && matches.length > 0) {
      violations.push({
        file: toRelative(filePath),
        examples: [...new Set(matches)].slice(0, 5),
      })
      break
    }
  }
}

if (violations.length > 0) {
  console.error("Theme token check failed. Remove hardcoded colors / palette classes.\n")
  for (const v of violations) {
    console.error(`- ${v.file}`)
    for (const ex of v.examples) console.error(`  - ${ex}`)
  }
  process.exit(1)
}

console.log("Theme token check passed.")

