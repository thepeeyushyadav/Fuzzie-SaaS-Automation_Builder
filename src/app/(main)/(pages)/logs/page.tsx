import React from 'react'
import { ClipboardList } from 'lucide-react'

const LogsPage = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between">
        Logs
      </h1>
      <div className="flex flex-col items-center justify-center gap-6 p-12 text-center mt-10">
        <div className="rounded-full bg-muted p-6">
          <ClipboardList className="h-12 w-12 text-muted-foreground" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Activity Logs</h2>
          <p className="text-muted-foreground max-w-md">
            Your workflow execution logs will appear here. You'll be able to
            track automation runs, debug issues, and monitor activity.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogsPage
