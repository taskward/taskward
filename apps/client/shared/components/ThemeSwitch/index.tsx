'use client'

import { Theme } from '@/shared/enums'
import { ThemeUtils } from '@/shared/utils'

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(Theme.LIGHT)

  const toggleTheme = () => {
    const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(currentTheme)
    ThemeUtils.changeTheme(currentTheme)
  }

  return (
    <Switch
      value={theme === Theme.LIGHT}
      onClick={toggleTheme}
    />
  )
}
