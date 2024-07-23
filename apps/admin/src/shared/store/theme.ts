import { darkThemeConfigPresets, lightThemeConfigPresets } from '@bit-ocean/theme'
import { Theme } from '@bit-ocean/utils'
import type { ThemeConfig } from 'antd'
import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

interface State {
  /**
   * Theme mode.
   * @enum `light` | `dark`
   */
  theme: Theme
  /**
   * Global light theme configuration.
   */
  lightThemeConfig: ThemeConfig
  /**
   * Global dark theme configuration.
   */
  darkThemeConfig: ThemeConfig
  /**
   * Whether to enable the happy work theme.
   * @default `true`
   */
  enableHappyWorkTheme: boolean
}

interface Actions {
  /**
   * Whether the current theme is light.
   */
  isLightTheme: () => boolean
  /**
   * Whether the current theme is dark.
   */
  isDarkTheme: () => boolean
  /**
   * Change the theme mode.
   * @description
   * - When the theme mode is switched, the `dark` class name is automatically added or removed on the `Document`.
   * - Store the theme mode in `localStorage` for reading next time the page is opened.
   */
  changeTheme: (theme: Theme) => void
  /**
   * Toggle the theme mode.
   */
  toggleTheme: () => void
  /**
   * Change the happy work theme.
   */
  setHappyWorkTheme: (enable: boolean) => void
  /**
   * Toggle the happy work theme.
   */
  toggleHappyWorkTheme: () => void
}

const initialState: State = {
  lightThemeConfig: lightThemeConfigPresets,
  darkThemeConfig: darkThemeConfigPresets,
  theme: ThemeUtils.getDefaultTheme(),
  enableHappyWorkTheme: true
}

export const useThemeStore = create<State & Actions>()(
  subscribeWithSelector(
    devtools((set, get) => ({
      ...initialState,
      isLightTheme: () => get().theme === Theme.LIGHT,
      isDarkTheme: () => get().theme === Theme.DARK,
      changeTheme: (theme: Theme) => {
        set({ theme })
        ThemeUtils.changeTheme(theme)
      },
      toggleTheme: () => {
        set(() => ({ theme: get().isLightTheme() ? Theme.DARK : Theme.LIGHT }))
        ThemeUtils.changeTheme(get().theme)
      },
      setHappyWorkTheme: (enable: boolean) => set({ enableHappyWorkTheme: enable }),
      toggleHappyWorkTheme: () =>
        set((state) => ({ enableHappyWorkTheme: !state.enableHappyWorkTheme }))
    }))
  )
)

/**
 * Subscribe to the theme mode.
 * @description
 * - When the theme mode is switched, the `dark` class name is automatically added or removed on the `Document`.
 * - Store the theme mode in `localStorage` for reading next time the page is opened.
 */
useThemeStore.subscribe(
  (state) => state.theme,
  (theme) => useThemeStore.getState().changeTheme(theme),
  {
    fireImmediately: true
  }
)
