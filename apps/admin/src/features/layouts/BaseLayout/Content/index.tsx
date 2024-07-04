import { Outlet } from '@tanstack/react-router'

export default function Content() {
  return (
    <div className="grow overflow-y-auto p-4 dark:bg-gray-600">
      <Outlet />
    </div>
  )
}
