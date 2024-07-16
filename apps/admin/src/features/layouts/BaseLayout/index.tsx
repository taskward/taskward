import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default function BaseLayout() {
  return (
    <main>
      {/* NOTE: `flex-row` is required to avoid flashing issue */}
      <Layout className="!flex h-screen !flex-row">
        <Sidebar />
        <Layout className="overflow-y-auto border-r border-gray-300 dark:border-gray-950">
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    </main>
  )
}
