import { Link, useNavigate, useRouter } from '@tanstack/react-router'
import { appConfig } from '@taskward/config'
import { Image } from 'antd'

import logo from '@/assets/images/logo/square.png'

export default function Header() {
  const router = useRouter()
  const navigate = useNavigate()

  const sidebarStore = useSidebarStore()

  const navToHome = () => navigate({ to: '/' })

  return (
    <Link
      to="/"
      className="!text-inherit"
    >
      <div
        className="flex h-14 w-full select-none items-center justify-center space-x-2.5"
        onMouseEnter={() => router.preloadRoute({ to: '/' })}
        onClick={navToHome}
      >
        <Image
          className="cursor-pointer rounded-md shadow-md"
          src={logo}
          alt="Logo"
          width={32}
          loading="eager"
          preview={false}
          draggable={false}
        />
        <span
          className={clsx([
            'cursor-pointer whitespace-nowrap text-lg tracking-wide transition-[margin,width]',
            sidebarStore.isDisplay && sidebarStore.isCollapse ? 'ml-0 hidden' : 'ml-1 w-auto',
            !sidebarStore.isDisplay && 'hidden'
          ])}
        >
          {appConfig.APP_NAME}
        </span>
      </div>
    </Link>
  )
}
