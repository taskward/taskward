import { useNavigate } from '@tanstack/react-router'
import { appConfig } from '@taskward/config'

import logo from '@/assets/images/logo/square.png'

import styles from './index.module.scss'

export default function Header() {
  const navigate = useNavigate()

  const [isTitleHover, setIsTitleHover] = useState(false)

  const navToHome = () => navigate({ to: '/' })

  return (
    <div className="flex h-16 select-none items-center justify-center space-x-2.5">
      <img
        className={clsx('cursor-pointer rounded-md shadow-md', isTitleHover && styles.imageBounce)}
        src={logo}
        alt="Logo"
        width={36}
        height={36}
        loading="eager"
        onClick={navToHome}
      />
      <span
        className="cursor-pointer text-lg font-medium"
        onClick={navToHome}
        onMouseOver={() => setIsTitleHover(true)}
        onMouseOut={() => setIsTitleHover(false)}
      >
        {appConfig.APP_NAME}
      </span>
    </div>
  )
}
