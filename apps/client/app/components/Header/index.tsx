import { appConfig } from '@taskward/config'

import { ThemeSwitcher } from '@/components'

export default function Header() {
  return (
    <div className="m-4 mb-2 flex h-16 items-center justify-between space-x-4 rounded-lg bg-slate-100 p-4 shadow-lg dark:bg-gray-700">
      <div className="select-none font-semibold">{appConfig.APP_NAME}</div>

      <div className="flex items-center">
        <ThemeSwitcher />
      </div>
    </div>
  )
}
