import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { getOrCreateDbUser } from '@/lib/get-or-create-user'
import Link from 'next/link'
import { GitBranch, Link2, ArrowRight } from 'lucide-react'

const DashboardPage = async () => {
  const user = await currentUser()
  if (!user) return null

  await getOrCreateDbUser()

  // Fetch dashboard data
  const [workflows, connections] = await Promise.all([
    db.workflows.findMany({
      where: { userId: user.id },
      orderBy: { name: 'asc' },
      take: 5,
    }),
    db.connections.findMany({
      where: { userId: user.id },
    }),
  ])

  const totalWorkflows = workflows.length
  const publishedWorkflows = workflows.filter((w) => w.publish).length
  const totalConnections = connections.length

  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Dashboard
      </h1>
      <div className="flex flex-col gap-6 p-6">
        {/* Welcome */}
        <div>
          <h2 className="text-2xl font-semibold">
            Welcome back, {user.firstName || 'there'}!
          </h2>
          <p className="text-muted-foreground mt-1">
            Here&apos;s an overview of your automations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <GitBranch className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Workflows</span>
            </div>
            <p className="text-3xl font-bold">{totalWorkflows}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {publishedWorkflows} published
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <Link2 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Connections</span>
            </div>
            <p className="text-3xl font-bold">{totalConnections}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Active integrations
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/workflows"
            className="group rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Create Workflow</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Build a new automation with the visual editor
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
          <Link
            href="/connections"
            className="group rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Manage Connections</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Connect Google Drive, Discord, Notion, and Slack
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
        </div>

        {/* Recent Workflows */}
        {workflows.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Workflows</h3>
              <Link
                href="/workflows"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="space-y-3">
              {workflows.map((workflow) => (
                <Link
                  key={workflow.id}
                  href={`/workflows/editor/${workflow.id}`}
                  className="flex items-center justify-between rounded-lg border bg-card p-4 hover:border-primary/50 transition-colors"
                >
                  <div>
                    <p className="font-medium">{workflow.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {workflow.description}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      workflow.publish
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-neutral-500/10 text-neutral-500'
                    }`}
                  >
                    {workflow.publish ? 'Published' : 'Draft'}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {workflows.length === 0 && (
          <div className="rounded-xl border border-dashed bg-card p-12 text-center">
            <GitBranch className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">No workflows yet</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create your first automation to get started.
            </p>
            <Link
              href="/workflows"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Create Workflow
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboardPage
