import { PublicLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_public')({
  component: () => (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  )
})
