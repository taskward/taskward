import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default function BaseLayout() {
  return (
    <Layout
      className="flex h-screen overflow-hidden border border-gray-300 dark:border-gray-950"
      hasSider
    >
      <Sidebar />
      <div className="h-screen grow overflow-y-auto">
        <Header />
        <Content />
        <Footer />
      </div>
    </Layout>
  )
}
