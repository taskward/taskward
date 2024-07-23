import { profileQO, usersQO } from '@/features/users'

export const Route = createFileRoute('/_base/dev/overview')({
  staticData: {
    title: 'Dev'
  },
  beforeLoad: async () => {
    await Promise.allSettled([
      queryClient.ensureQueryData(profileQO()),
      queryClient.ensureQueryData(usersQO())
    ])
  }
})
