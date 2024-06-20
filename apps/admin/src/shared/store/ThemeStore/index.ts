import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

import type { Theme } from '@/shared/enums'
import { ThemeUtils } from '@/shared/utils'

type ThemeStore = {
  theme: Theme
  setTheme: (theme: Theme) => void
  changeTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>()(
  subscribeWithSelector((set) => ({
    theme: ThemeUtils.getTheme() as Theme,
    setTheme: (theme: Theme) => {
      set({ theme })
    },
    changeTheme: (theme: Theme) => {
      ThemeUtils.changeTheme(theme)
    }
  }))
)
