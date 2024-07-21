import type { PropsWithChildren } from 'react'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default function BaseLayout(props: PropsWithChildren) {
  const { children } = props
  return (
    <Layout
      className="flex h-screen overflow-hidden border border-gray-300 dark:border-gray-950"
      hasSider
    >
      <Sidebar />
      <div className="h-screen grow overflow-y-auto">
        <Header />
        <Content>{children}</Content>
        <Footer />
      </div>
    </Layout>
  )
}
