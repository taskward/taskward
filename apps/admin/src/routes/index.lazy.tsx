import { createLazyFileRoute } from '@tanstack/react-router'

import { BaseLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/')({
  component: () => <BaseLayout />
})
