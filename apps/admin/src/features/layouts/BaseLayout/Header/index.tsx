import { useNavigate, useRouter } from '@tanstack/react-router'
import { AuthUtils } from '@taskward/utils'

import IconAccessibility from '~icons/carbon/accessibility'

import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  const router = useRouter()
  const navigate = useNavigate()
  const { message } = App.useApp()
  return (
    <div className="m-4 flex h-16 items-center justify-between bg-slate-200 p-4 dark:bg-gray-400">
      Header
      <IconAccessibility />
      <ThemeSwitch />
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
