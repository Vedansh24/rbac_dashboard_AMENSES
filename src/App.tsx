import AppRouter from "./routes/AppRouter"
import { useEffect } from "react"

import { useAppDispatch } from "@/app/hooks"
import { hydrateAuth } from "@/features/auth/authSlice"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(hydrateAuth())
  }, [dispatch])

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <AppRouter />
    </div>
  )
}

export default App