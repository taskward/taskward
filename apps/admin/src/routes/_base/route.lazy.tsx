import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

import { BaseLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base')({
  component: Layout
})

function Layout() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  )
}
