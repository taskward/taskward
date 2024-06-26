import { createLazyFileRoute } from '@tanstack/react-router'

import { BaseLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base')({
  component: BaseLayout
})
