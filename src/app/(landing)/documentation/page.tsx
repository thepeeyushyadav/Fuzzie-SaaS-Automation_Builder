import React from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex items-center gap-4 mb-8">
          <div className="rounded-full bg-[#2F006B] p-3">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Documentation
          </h1>
        </div>
        <p className="text-xl text-neutral-400 mb-12 max-w-2xl">
          Everything you need to know about building automations with Fuzzie.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-neutral-700 transition-colors">
                <h3 className="font-medium mb-1">1. Create an Account</h3>
                <p className="text-neutral-400 text-sm">Sign up with Google to get started with Fuzzie and access all integrations.</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-neutral-700 transition-colors">
                <h3 className="font-medium mb-1">2. Connect Your Services</h3>
                <p className="text-neutral-400 text-sm">Link Google Drive, Discord, Notion, and Slack from the Connections page.</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-neutral-700 transition-colors">
                <h3 className="font-medium mb-1">3. Build a Workflow</h3>
                <p className="text-neutral-400 text-sm">Use the visual editor to drag and drop triggers and actions to create your automation.</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 hover:border-neutral-700 transition-colors">
                <h3 className="font-medium mb-1">4. Publish & Monitor</h3>
                <p className="text-neutral-400 text-sm">Enable your workflow and track execution from the Logs page.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Integrations</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <h3 className="font-medium mb-1">Google Drive</h3>
                <p className="text-neutral-400 text-sm">Trigger workflows on file changes, access file metadata.</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <h3 className="font-medium mb-1">Discord</h3>
                <p className="text-neutral-400 text-sm">Send messages to channels via webhooks.</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <h3 className="font-medium mb-1">Notion</h3>
                <p className="text-neutral-400 text-sm">Create database entries and pages automatically.</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <h3 className="font-medium mb-1">Slack</h3>
                <p className="text-neutral-400 text-sm">Post messages to channels using your custom bot.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Workflow Editor</h2>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
              <p className="text-neutral-400 text-sm">
                The workflow editor uses a visual canvas where you can drag and drop
                nodes representing triggers and actions. Connect nodes with edges to
                define the execution order. Each node can be configured with templates
                and connection settings in the sidebar.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/sign-up"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black hover:bg-neutral-200 transition-colors"
          >
            Get Started Free →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DocumentationPage
