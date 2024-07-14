import type { MouseEvent } from 'react'

const isAppearanceTransition = () =>
  document.startViewTransition !== undefined &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function ThemeToggle() {
  const { t } = useTranslation()
  const themeStore = useThemeStore()

  const handleToggleTheme = async (event: MouseEvent) => {
    if (!isAppearanceTransition()) {
      themeStore.toggleTheme()
      return
    }
    const { clientX: x, clientY: y } = event
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )
    const transition = document.startViewTransition(() => themeStore.toggleTheme())
    await transition.ready
    const isDarkTheme = themeStore.isDarkTheme()
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      {
        clipPath: isDarkTheme ? clipPath : [...clipPath].reverse()
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: isDarkTheme ? '::view-transition-new(root)' : '::view-transition-old(root)'
      }
    )
  }

  const iconColor = useMemo(() => (themeStore.isLightTheme() ? '#FDC022' : '#FED736'), [themeStore])

  const Icon = useMemo(
    () => (
      <>
        {themeStore.isLightTheme() ? (
          <LineMdMoonAltToSunnyOutlineLoopTransition color={iconColor} />
        ) : (
          <LineMdSunnyFilledLoopToMoonAltFilledLoopTransition color={iconColor} />
        )}
      </>
    ),
    [iconColor, themeStore]
  )

  return (
    <Tooltip
      title={t('SWITCH.THEME')}
      placement="bottom"
    >
      <div
        className="cursor-pointer text-lg"
        onClick={handleToggleTheme}
      >
        {Icon}
      </div>
    </Tooltip>
  )
}
