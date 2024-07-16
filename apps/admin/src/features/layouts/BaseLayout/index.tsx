import { useResponsive } from 'ahooks'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default function BaseLayout() {
  const sidebarStore = useSidebarStore()
  const responsive = useResponsive()

  const marginLeft = useMemo(() => {
    if (!sidebarStore.isDisplay || !responsive.sm) {
      return 0
    }
    if (sidebarStore.isCollapse) {
      return 64
    }
    return 224
  }, [sidebarStore.isCollapse, sidebarStore.isDisplay, responsive.sm])

  return (
    <Layout
      hasSider
      className="overflow-x-hidden"
    >
      <Sidebar />
      <Layout
        style={{
          marginLeft,
          transition: 'margin-left 0.2s',
          transitionTimingFunction: 'ease'
        }}
      >
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  )
}
