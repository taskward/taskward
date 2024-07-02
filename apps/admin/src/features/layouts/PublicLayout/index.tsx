import type { PropsWithChildren } from 'react'

import loginBg from '@/assets/images/background/login.jpg'
import loginBgDark from '@/assets/images/background/login_dark.jpg'

import Transition from './Transition'

export default function PublicLayout(props: PropsWithChildren) {
  const { children } = props

  const themeStore = useThemeStore()

  return (
    <div className="h-screen w-screen sm:p-10">
      <div
        className="h-full bg-cover bg-no-repeat p-4 shadow-sm transition-[background-image] duration-1000 sm:rounded-3xl"
        style={{
          /**
           * NOTE: Use `linear-gradient` to make background image darker.
           * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
           */
          backgroundImage: `url(${themeStore.isLightTheme() ? loginBg : loginBgDark})`
        }}
      >
        <Transition>{children}</Transition>
      </div>
    </div>
  )
}
