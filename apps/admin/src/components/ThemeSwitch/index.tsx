import { Switch } from 'antd'
import { useState } from 'react'

import { Theme } from '../../enums'
import { ThemeUtils } from '../../utils/theme'

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(Theme.LIGHT)
  const toggleTheme = () => {
    const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(currentTheme)
    ThemeUtils.changeTheme(currentTheme)
  }
  return (
    <Switch
      onClick={toggleTheme}
      checked={theme === Theme.DARK}
    />
  )
}
