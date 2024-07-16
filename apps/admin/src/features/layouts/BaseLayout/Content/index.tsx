import { Outlet } from '@tanstack/react-router'

export default function Content() {
  return (
    <Layout.Content className="relative min-h-[calc(100vh-94px)] border-x border-gray-300 bg-white p-2 sm:border-l sm:border-r-0 sm:p-4 dark:border-gray-950 dark:bg-[#37393e80]">
      <Outlet />
    </Layout.Content>
  )
}
