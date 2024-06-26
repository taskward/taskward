import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

import { AuthLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_public')({
  component: () => (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  )
})
