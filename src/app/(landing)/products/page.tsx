import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Boxes } from 'lucide-react'

const ProductsPage = () => {
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
            <Boxes className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Products
          </h1>
        </div>
        <p className="text-xl text-neutral-400 mb-12 max-w-2xl">
          Discover our suite of automation tools designed to streamline your workflows
          and boost productivity.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Workflow Builder</h3>
            <p className="text-neutral-400 text-sm">
              Visual drag-and-drop editor for creating complex automation workflows
              connecting Google Drive, Discord, Notion, and Slack.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Smart Triggers</h3>
            <p className="text-neutral-400 text-sm">
              Set up automated triggers that listen for changes in your connected
              services and execute workflows in real-time.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Integration Hub</h3>
            <p className="text-neutral-400 text-sm">
              One-click connections to Google Drive, Discord, Notion, and Slack
              with secure OAuth authentication.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Activity Monitoring</h3>
            <p className="text-neutral-400 text-sm">
              Track every automation run with detailed logs, performance metrics,
              and real-time status updates.
            </p>
          </div>
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

export default ProductsPage
