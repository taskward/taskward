import CollapseButton from './CollapseButton'
import Header from './Header'
import Mask from './Mask'
import SideMenu from './SideMenu'

export default function Sidebar() {
  const sidebarStore = useSidebarStore()
  return (
    <>
      <Layout.Sider
        className={clsx(
          '!absolute inset-y-0 left-0 z-[100] h-screen overflow-hidden border border-gray-300 shadow-sm sm:!static dark:border-gray-950',
          !sidebarStore.isDisplay && 'border-r-0'
        )}
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
