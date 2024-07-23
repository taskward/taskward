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
