import { type MenuProps, theme } from 'antd'

import { staticMenus } from '@/features/menus'

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
        .reduce<string[]>((acc, cur) => [...acc, `${acc}/${cur}`], [])
        .concat(value)
    )
  }, [location.pathname])

  const handleClickMenuItem: MenuProps['onClick'] = (menuItem) => {
    if (menuItem?.key && typeof menuItem.key === 'string') {
      navigate({ to: menuItem.key })
    }
  }

  return (
    <Menu
      className="select-none"
      style={{
        backgroundColor: siderBg,
        border: 'none',
        height: 'calc(100vh - 96px)',
        width: '100%',
        overflowY: 'auto'
      }}
      items={staticMenus}
      mode="inline"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      onClick={handleClickMenuItem}
    />
  )
}
