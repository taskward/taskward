import { Theme } from '@taskward/utils'

import { useThemeStore } from '@/shared/store'

export default function ThemeSwitch() {
  const themeStore = useThemeStore()

  return (
    <Switch
      value={themeStore.theme === Theme.DARK}
      onClick={themeStore.toggleTheme}
    />
  )
}
