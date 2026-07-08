'use server'

import { db } from '@/lib/db'
import { getOrCreateDbUser } from '@/lib/get-or-create-user'

export const getUserData = async (id: string) => {
  // Ensure user exists in DB before querying
  await getOrCreateDbUser()

  const user_info = await db.user.findUnique({
    where: {
      clerkId: id,
    },
    include: {
      connections: true,
    },
  })

  return user_info
}
