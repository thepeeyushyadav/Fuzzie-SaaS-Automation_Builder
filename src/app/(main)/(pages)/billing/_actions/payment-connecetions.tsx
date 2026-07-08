'use server'

import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { getOrCreateDbUser } from '@/lib/get-or-create-user'

export const onPaymentDetails = async () => {
  const user = await currentUser()
  if (!user) return null

  // Ensure user exists in DB (creates if not exists)
  await getOrCreateDbUser()

  const connection = await db.user.findFirst({
    where: {
      clerkId: user.id,
    },
    select: {
      tier: true,
      credits: true,
    },
  })

  return connection
}
