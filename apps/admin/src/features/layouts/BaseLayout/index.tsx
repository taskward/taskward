import type { PropsWithChildren } from 'react'

import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'

export default function BaseLayout(props: PropsWithChildren) {
  const { children } = props
  return (
    <main className="flex h-screen flex-col">
      <Header />
      <div className="flex grow">
        <Sidebar />
        <Content />
        {children}
      </div>
    </main>
  )
}
