import { useLocation, useNavigate } from '@tanstack/react-router'
import { type MenuProps, theme } from 'antd'

export default function SideMenu() {
  const { siderBg } = theme.useToken().token.Layout!
  const navigate = useNavigate()
  const location = useLocation()

  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  useEffect(() => {
    setSelectedKeys([location.pathname])
    setOpenKeys((value) =>
      location.pathname
        .split('/')
        .filter((i) => i)
        .reduce<string[]>((acc, cur) => {
          const key = `${acc}/${cur}`
          return [...acc, key]
        }, [])
        .concat(value)
    )
  }, [location.pathname])

  const handleClickMenuItem: MenuProps['onClick'] = (menuInfo) => {
    if (menuInfo?.key && typeof menuInfo.key === 'string') {
      navigate({ to: menuInfo.key })
    }
  }

  return (
    <Menu
      style={{
        backgroundColor: siderBg,
        border: 'none',
        height: 'calc(100vh - 96px)',
        width: '100%',
        overflowY: 'auto'
      }}
      items={[]}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      mode="inline"
      onClick={handleClickMenuItem}
    />
  )
}
