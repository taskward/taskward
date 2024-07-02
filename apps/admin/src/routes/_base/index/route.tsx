import { createFileRoute } from '@tanstack/react-router'

import { profileQO, usersQO } from '@/features/users'

export const Route = createFileRoute('/_base/')({
  staticData: {
    title: '首页'
  },
  beforeLoad: async () => {
    await Promise.allSettled([
      queryClient.ensureQueryData(profileQO),
      queryClient.ensureQueryData(usersQO)
    ])
  }
})
