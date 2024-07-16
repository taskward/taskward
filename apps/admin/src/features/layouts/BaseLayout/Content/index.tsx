import { Outlet } from '@tanstack/react-router'

export default function Content() {
  return (
    <Layout.Content>
      <div className="relative min-h-full bg-white p-2 sm:p-4 dark:bg-[#37393e80]">
        <Outlet />
      </div>
    </Layout.Content>
  )
}
