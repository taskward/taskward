import { Theme } from '@taskward/utils'

export default function ThemeSwitch() {
  const themeStore = useThemeStore()

  return (
    <Switch
      value={themeStore.theme === Theme.DARK}
      onClick={themeStore.toggleTheme}
    />
  )
}
