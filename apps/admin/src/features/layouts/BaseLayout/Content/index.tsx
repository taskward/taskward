import { Outlet } from '@tanstack/react-router'

export default function Content() {
  return (
    <div className="relative mx-4 mb-4 ml-0 grow bg-slate-400 p-4 dark:bg-gray-600">
      <Outlet />
    </div>
  )
}
