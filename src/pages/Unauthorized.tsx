import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function Unauthorized() {
  return (
    <div className="min-h-dvh flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">403 — Unauthorized</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            You don’t have permission to access this page.
          </p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button asChild variant="secondary" className="w-full">
            <Link to="/dashboard">Go to dashboard</Link>
          </Button>
          <Button asChild className="w-full">
            <Link to="/user/login">Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Unauthorized