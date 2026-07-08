import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

declare global {
  var prisma: PrismaClient | undefined
  var pgPool: Pool | undefined
}

function getPool() {
  if (!globalThis.pgPool) {
    globalThis.pgPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 2,
      idleTimeoutMillis: 0,
      connectionTimeoutMillis: 30000,
    })

    globalThis.pgPool.on('error', (err) => {
      // When Neon terminates an idle connection, log it and let the pool recover
      console.warn('DB pool connection error (will auto-recover):', err.message)
    })
  }
  return globalThis.pgPool
}

function getDb() {
  if (globalThis.prisma) return globalThis.prisma
  const adapter = new PrismaPg(getPool())
  const client = new PrismaClient({ adapter })
  if (process.env.NODE_ENV !== 'production') globalThis.prisma = client
  return client
}

export const db = getDb()