import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Building2, CheckIcon } from 'lucide-react'

const EnterprisePage = () => {
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
          <div className="rounded-full bg-emerald-900/50 p-3">
            <Building2 className="h-8 w-8 text-emerald-400" />
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Enterprise
          </h1>
        </div>
        <p className="text-xl text-neutral-400 mb-12 max-w-2xl">
          Tailored automation solutions for large organizations with dedicated support,
          custom integrations, and enterprise-grade security.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Everything you need</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Unlimited automations & tasks</h3>
                  <p className="text-neutral-400 text-sm">No caps on workflow count or monthly task executions.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Custom integrations</h3>
                  <p className="text-neutral-400 text-sm">We&apos;ll build bespoke connectors for your internal tools and APIs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Dedicated account manager</h3>
                  <p className="text-neutral-400 text-sm">A named contact for onboarding, training, and ongoing support.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">SSO / SAML authentication</h3>
                  <p className="text-neutral-400 text-sm">Integrate with your identity provider for secure team access.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">SLA guarantee & 24/7 support</h3>
                  <p className="text-neutral-400 text-sm">Guaranteed uptime SLAs and round-the-clock priority support.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Advanced audit logs</h3>
                  <p className="text-neutral-400 text-sm">Complete visibility into all workflow executions and user activity.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center w-full">
              <h3 className="text-3xl font-bold mb-2">Custom Pricing</h3>
              <p className="text-neutral-400 mb-6">
                Pricing tailored to your organization&apos;s size and needs.
              </p>
              <a
                href="mailto:sales@fuzzie.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-8 text-sm font-medium text-white hover:bg-emerald-500 transition-colors"
              >
                Contact Sales
              </a>
              <p className="text-neutral-500 text-xs mt-4">
                sales@fuzzie.com
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
          <h3 className="text-lg font-semibold mb-2">Trusted by teams worldwide</h3>
          <p className="text-neutral-400 text-sm">
            Fuzzie Enterprise powers automation for teams of all sizes.
            Schedule a demo to see how Fuzzie can transform your team&apos;s productivity.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EnterprisePage
