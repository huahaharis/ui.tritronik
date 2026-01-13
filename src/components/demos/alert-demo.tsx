"use client"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the CLI.
      </AlertDescription>
    </Alert>
  )
}
