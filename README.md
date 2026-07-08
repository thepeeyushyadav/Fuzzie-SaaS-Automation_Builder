<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white" alt="Neon Postgres" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Clerk_Auth-6C47FF?logo=clerk&logoColor=white" alt="Clerk Auth" />
  <img src="https://img.shields.io/badge/Stripe-626CD9?logo=stripe&logoColor=white" alt="Stripe" />
  <img src="https://img.shields.io/badge/React_Flow-FF0072?logo=react&logoColor=white" alt="React Flow" />
</div>

<h1 align="center">Fuzzie - Enterprise SaaS Automation Builder</h1>

<p align="center">
  A highly scalable, multi-tenant SaaS platform that acts as your personal automation engine. Fuzzie empowers users to connect disparate web applications (Google Drive, Notion, Slack, Discord) and create powerful, real-time automated workflows using a stunning visual node editor—comparable to industry giants like Zapier or Make.com.
</p>

<p align="center">
  <strong>🔴 Live Demo:</strong> <a href="https://fuzzie-saa-s-automation-builder.vercel.app/" target="_blank">https://fuzzie-saa-s-automation-builder.vercel.app/</a>
</p>

<br />

<div align="center">
  <img src="./public/Screenshot%202026-07-08%20115449.png" alt="Fuzzie Dashboard Overview" width="100%" style="border-radius: 12px; box-shadow: 0px 8px 30px rgba(0,0,0,0.6); margin-bottom: 30px;" />
  <img src="./public/git.png" alt="Fuzzie Visual Builder Canvas" width="100%" style="border-radius: 12px; box-shadow: 0px 8px 30px rgba(0,0,0,0.6);" />
</div>

<br />

---

## 🌟 Comprehensive Feature Breakdown

Fuzzie is not just an interface; it is a complete backend event-processing engine built for production. 

### 1. Visual Automation Canvas (React Flow)
* **Infinite Drag & Drop Canvas:** Built on top of `reactflow`, users can drag integration nodes onto an infinite grid to design their workflow logic.
* **Custom Nodes & Edges:** Specifically designed UI for each integration (Triggers and Actions) with custom connection pathways.
* **Real-time State Management:** Utilizes **Zustand** alongside React Context to instantly reflect canvas changes, saving node positioning and connection states to the database securely.

### 2. Powerful Integrations & Webhooks
* **Google Drive (Trigger):** Automatically listens to user's Google Drive via secure push-webhooks. Whenever a file is created or modified, Fuzzie catches the payload and triggers the associated automation.
* **Slack (Action):** Authenticated via Slack OAuth. Fuzzie can dynamically push messages to specific Slack channels based on upstream data.
* **Discord (Action):** Discord Bot integration allows Fuzzie to post real-time alerts into designated Discord servers.
* **Notion (Action):** Connects to Notion workspaces to automatically append new items, pages, or data entries into Notion Databases.

### 3. Enterprise-Grade Authentication & Security
* **Clerk Integration:** Complete user lifecycle management including Secure Sign-In, Sign-Up, password recovery, and session management.
* **OAuth2 Flows:** Secure, custom-built token exchange flows for users granting access to their third-party apps (Google, Slack, etc.). Tokens are stored securely in the Postgres database.

### 4. Billing, Subscriptions & Credits
* **Stripe Payment Gateway:** Integrated checkout sessions using Stripe.
* **Tiered Subscriptions:** Handles different pricing tiers (Free, Pro, Unlimited) with recurring billing.
* **Credit Tracking System:** Each workflow execution burns a "credit". The platform actively tracks credits per user, gating executions if limits are reached, and dynamically updating via Stripe webhooks upon subscription upgrades.

### 5. Beautiful & Modern UI/UX
* **Aceternity UI & Framer Motion:** The landing page features state-of-the-art 3D hover effects, animated glowing backgrounds, and smooth scroll transitions.
* **Shadcn UI + Tailwind CSS:** A fully accessible, dark-mode-first component library ensuring a premium, unified aesthetic across all dashboards, modals, and forms.
* **UploadCare:** Integrated dropzones for seamless and optimized file uploads.

---

## 🏗️ System Architecture & Data Flow

Fuzzie relies entirely on Next.js Server Actions for client-to-database mutations and Edge API routes for receiving high-throughput webhooks.

```mermaid
graph TD
    subgraph Frontend [Next.js App Router UI]
        Landing[Landing Page / Pricing]
        Dashboard[User Dashboard]
        Editor[React Flow Visual Builder]
    end

    subgraph Authentication
        ClerkAuth[Clerk Identity Provider]
    end

    subgraph Backend [Next.js Server]
        Actions[Server Actions]
        OAuth[OAuth Callback Handlers]
        StripeWebhook[Stripe Billing Webhooks]
        DriveWebhook[Google Drive Webhook Listener]
        Engine[Automation Execution Engine]
    end

    subgraph Database [Neon Postgres via Prisma]
        Users[(Users & Credits)]
        Workflows[(Saved Workflows)]
        Connections[(OAuth Access Tokens)]
    end

    subgraph External Platforms
        Google[Google Drive]
        Notion[Notion API]
        Slack[Slack API]
        Discord[Discord API]
        Stripe[Stripe API]
    end

    %% Flow Connections
    Landing --> ClerkAuth
    Dashboard --> Actions
    Editor -->|Saves Node Graph| Actions
    Actions --> Workflows

    OAuth --> Connections
    StripeWebhook --> Users

    Google -->|Push Event Payload| DriveWebhook
    DriveWebhook -->|Validates Credits| Users
    DriveWebhook -->|Fetches Logic| Workflows
    DriveWebhook --> Engine

    Engine -->|Reads Tokens| Connections
    Engine -->|Fires Action| Slack
    Engine -->|Fires Action| Discord
    Engine -->|Fires Action| Notion
```

---

## 🛠️ Complete Technology Stack

| Domain | Technology Used |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router, Server Components) |
| **Language** | TypeScript |
| **Visual Node Editor** | React Flow |
| **Database** | Neon Serverless Postgres |
| **ORM** | Prisma |
| **Authentication** | Clerk |
| **Payments** | Stripe |
| **Styling & UI** | Tailwind CSS, Shadcn UI, Aceternity UI, Lucide React |
| **Animations** | Framer Motion |
| **State Management**| Zustand, React Context API |
| **Forms & Validation**| React Hook Form, Zod |
| **File Storage** | UploadCare |

---

## 🚀 Getting Started (Local Development)

### Prerequisites
* **Node.js** (v18+) or **Bun**
* A **NeonDB** (Postgres) connection string
* Developer accounts for **Clerk, Stripe, Google Cloud, Notion, Slack, Discord**
* **Ngrok** (crucial for local webhook testing)

### 1. Clone & Install
```bash
git clone https://github.com/your-username/fuzzie-app.git
cd fuzzie-app
bun install
```

### 2. Environment Variables
Create a `.env` file in the root. You must configure the following parameters (refer to a `.env.example` if needed):
* `DATABASE_URL` (Neon Postgres)
* Clerk Secret and Publishable Keys
* Stripe Secret Key and Webhook Secret
* OAuth Client IDs & Secrets for Google, Slack, Discord, Notion
* `NEXT_PUBLIC_URL` (usually `http://localhost:3000`)
* `NGROK_URI` (your ngrok forwarding URL for webhooks)

### 3. Database Initialization
Push the Prisma schema to your Postgres instance and generate the client:
```bash
bunx prisma generate
bunx prisma db push
```

### 4. Run the Servers
To develop locally and test actual triggers from Google Drive, you need two terminals:

**Terminal 1 (Next.js):**
```bash
bun run dev
```
**Terminal 2 (Ngrok):**
```bash
ngrok http 3000
```
*Note: Ensure your Google Drive webhook subscriptions point to your `https://<ngrok-id>.ngrok-free.app/api/drive-activity/notification` endpoint.*

---

## 🌍 Deployment

Fuzzie is optimized for deployment on **Vercel**. 

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Vercel will automatically detect Next.js. 
4. **Crucial:** Ensure your build script in `package.json` runs Prisma generation to prevent caching errors:
   `"build": "prisma generate && next build"`
5. Paste all your environment variables into Vercel settings.
6. Deploy.
7. Update all your OAuth redirect URIs in Google, Slack, Discord, and Notion developer consoles to your new `https://your-app.vercel.app` domain.

---

### ✍️ Built & Maintained By
**Piyush Yadav**
