import { useNavigate, useRouter } from '@tanstack/react-router'
import { AuthUtils } from '@taskward/utils'

import MenuVisibilityToggle from './MenuVisibilityToggle'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const router = useRouter()
  const navigate = useNavigate()
  const { message } = App.useApp()

  return (
    <Layout.Header
      className="z-50 flex items-center justify-between border-y border-gray-300 p-2 shadow-sm sm:p-4 dark:border-gray-950"
      style={{
        padding: '0 15px',
        height: '56px'
      }}
    >
      <div className="flex items-center justify-start space-x-4">
        <MenuVisibilityToggle />
      </div>

      <ThemeToggle />
      <Button
        onClick={() => {
          AuthUtils.clearAccessToken()
          AuthUtils.clearRefreshToken()
          AuthUtils.clearRememberedAccount()
          router.history.flush()
          navigate({ to: '/login', replace: true })
          message.success('退出成功')
        }}
      >
        退出登录
      </Button>
    </Layout.Header>
  )
}
