import { Outlet } from '@tanstack/react-router'

export default function Content() {
  return (
    <Layout.Content className="relative min-h-[calc(100vh-98px)] bg-white p-2 sm:p-4 dark:bg-[#37393e80]">
      <Outlet />
    </Layout.Content>
  )
}
