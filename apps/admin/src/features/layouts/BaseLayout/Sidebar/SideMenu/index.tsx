import { useLocation, useNavigate } from '@tanstack/react-router'
import { theme } from 'antd'

export default function SideMenu() {
  const { siderBg } = theme.useToken().token.Layout!
  const navigate = useNavigate()
  const location = useLocation()

  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  return (
    <Menu
      className="grow !border-0"
      style={{ backgroundColor: siderBg }}
      items={[]}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      mode="inline"
      onClick={() => {}}
    />
  )
}
