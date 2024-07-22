import { createFileRoute } from '@tanstack/react-router'

import { usersQO } from '@/features/users'

export const Route = createFileRoute('/_base/system/users/')({
  staticData: {
    title: 'User Management',
    icon: <LucideUserRoundCog />
  },
  beforeLoad: async () => {
    await queryClient.ensureQueryData(usersQO())
  }
})
