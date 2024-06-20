import { Switch } from 'antd'

import { Theme } from '@/shared/enums'
import { useThemeStore } from '@/shared/store'

export default function ThemeSwitch() {
  const { theme, setTheme } = useThemeStore()
  const toggleTheme = () => {
    const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(currentTheme)
  }

  return (
    <Switch
      onClick={toggleTheme}
      checked={theme === Theme.DARK}
    />
  )
}
