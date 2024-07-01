import type { PropsWithChildren } from 'react'

import loginBg from '@/assets/images/background/login.jpg'
import loginBgDark from '@/assets/images/background/login_dark.jpg'

export function PageContainer(props: PropsWithChildren) {
  const { children } = props

  const themeStore = useThemeStore()

  return (
    <div className="h-screen w-screen p-10">
      <div
        className="flex h-full items-center justify-center rounded-3xl bg-cover bg-no-repeat shadow-sm transition-[background-image] duration-1000"
        style={{
          /**
           * NOTE: Use `linear-gradient` to make background image darker.
           * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
           */
          backgroundImage: `url(${themeStore.isLightTheme() ? loginBg : loginBgDark})`
        }}
      >
        {children}
      </div>
    </div>
  )
}
