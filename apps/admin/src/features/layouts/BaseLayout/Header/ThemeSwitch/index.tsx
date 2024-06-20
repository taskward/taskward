import { Switch } from 'antd'

import { Theme } from '@/shared/enums'
import { useThemeStore } from '@/shared/store'

export default function ThemeSwitch() {
  const { theme, setTheme, changeTheme } = useThemeStore()
  const toggleTheme = () => {
    const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(currentTheme)
  }
  useThemeStore.subscribe(
    (state) => state.theme,
    () => {
      changeTheme(theme)
    },
    {
      fireImmediately: true
    }
  )
  return (
    <Switch
      onClick={toggleTheme}
      checked={theme === Theme.DARK}
    />
  )
}
