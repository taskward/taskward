import { useNavigate, useRouter } from '@tanstack/react-router'
import { AuthUtils } from '@taskward/utils'

import MenuVisibilityToggle from './MenuVisibilityToggle'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const router = useRouter()
  const navigate = useNavigate()
  const { message } = App.useApp()

  return (
    <div className="z-50 flex h-16 items-center justify-between border-b p-4 shadow-sm dark:bg-gray-400">
      <MenuVisibilityToggle />
      <ThemeToggle />
      <Button
        onClick={() => {
          AuthUtils.clearAccessToken()
          AuthUtils.clearRefreshToken()
          router.history.flush()
          navigate({ to: '/login', replace: true })
          message.success('退出成功')
        }}
      >
        退出登录
      </Button>
    </div>
  )
}
