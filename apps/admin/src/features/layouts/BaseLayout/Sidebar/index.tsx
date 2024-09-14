import CollapseButton from './CollapseButton'
import Header from './Header'
import Mask from './Mask'
import SideMenu from './SideMenu'

export default function Sidebar() {
  const sidebarStore = useSidebarStore()
  return (
    <>
      <Layout.Sider
        className="!absolute left-0 z-[100] overflow-hidden border-gray-300 shadow-md sm:!static sm:border-r sm:shadow-sm dark:border-gray-950"
        collapsible
        collapsed={sidebarStore.isCollapse}
        onCollapse={sidebarStore.setIsCollapse}
        width={sidebarStore.isDisplay ? 224 : 0}
        collapsedWidth={sidebarStore.isDisplay ? 64 : 0}
        trigger={null}
      >
        <Header />
        <SideMenu />
        <CollapseButton />
      </Layout.Sider>
      <Mask />
    </>
  )
}
