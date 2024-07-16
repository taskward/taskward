import CollapseButton from './CollapseButton'
import Header from './Header'
import Mask from './Mask'
import SideMenu from './SideMenu'

export default function Sidebar() {
  const sidebarStore = useSidebarStore()
  return (
    <>
      <Layout.Sider
        className="z-[100] h-screen overflow-hidden shadow-md sm:shadow-sm"
        style={{ height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
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
