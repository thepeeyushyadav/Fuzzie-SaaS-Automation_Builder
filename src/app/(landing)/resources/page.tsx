import React from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'

const ResourcesPage = () => {
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
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Resources
          </h1>
        </div>
        <p className="text-xl text-neutral-400 mb-12 max-w-2xl">
          Guides, tutorials, and best practices to help you get the most out of Fuzzie.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Getting Started Guide</h3>
            <p className="text-neutral-400 text-sm mb-3">
              Learn the basics of setting up your first automation workflow in under 5 minutes.
            </p>
            <span className="text-xs text-[#E2CBFF]">Beginner</span>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Integration Setup</h3>
            <p className="text-neutral-400 text-sm mb-3">
              Step-by-step instructions for connecting Google Drive, Discord, Notion, and Slack.
            </p>
            <span className="text-xs text-[#E2CBFF]">Beginner</span>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Advanced Workflows</h3>
            <p className="text-neutral-400 text-sm mb-3">
              Build multi-step automations with conditional logic and custom templates.
            </p>
            <span className="text-xs text-[#E2CBFF]">Advanced</span>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors">
            <h3 className="text-lg font-semibold mb-2">API Reference</h3>
            <p className="text-neutral-400 text-sm mb-3">
              Connect custom webhooks and external services using our REST API.
            </p>
            <span className="text-xs text-[#E2CBFF]">Developer</span>
          </div>
        </div>
        <div className="mt-12 p-6 rounded-xl border border-neutral-800 bg-neutral-900/30">
          <h3 className="text-lg font-semibold mb-2">Need help?</h3>
          <p className="text-neutral-400 text-sm">
            Our support team is available to help you with any questions.
            Reach out at{' '}
            <a href="mailto:support@fuzzie.com" className="text-[#E2CBFF] hover:underline">
              support@fuzzie.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage
