'use server'

import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'

/**
 * Gets the DB user for the currently logged-in Clerk user.
 * If the user doesn't exist yet (webhook hasn't fired), it creates them automatically.
 * Uses findFirst + create pattern instead of upsert to avoid unique constraint issues on email.
 */
export const getOrCreateDbUser = async () => {
  const authUser = await currentUser()
  if (!authUser) return null

  // First, try to find by clerkId (most reliable lookup)
  const existing = await db.user.findFirst({
    where: { clerkId: authUser.id },
  })

  if (existing) return existing

  // User doesn't exist yet — create them
  const email = authUser.emailAddresses[0]?.emailAddress ?? `${authUser.id}@unknown.com`
  const name = authUser.firstName ?? authUser.username ?? ''
  const profileImage = authUser.imageUrl ?? ''

  try {
    const newUser = await db.user.create({
      data: {
        clerkId: authUser.id,
        email,
        name,
        profileImage,
      },
    })
    return newUser
  } catch (error: any) {
    // If email unique constraint fails (email already taken by another clerkId),
    // use a unique fallback email and try again
    if (error?.code === 'P2002') {
      const fallbackEmail = `${authUser.id}@clerk-user.com`
      const newUser = await db.user.create({
        data: {
          clerkId: authUser.id,
          email: fallbackEmail,
          name,
          profileImage,
        },
      })
      return newUser
    }
    throw error
  }
}
