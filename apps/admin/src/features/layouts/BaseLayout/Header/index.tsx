import IconAccessibility from '~icons/carbon/accessibility'

import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  return (
    <div className="m-4 flex h-16 items-center justify-between bg-slate-200 p-4 dark:bg-gray-400">
      Header
      <IconAccessibility />
      <ThemeSwitch />
    </div>
  )
}
