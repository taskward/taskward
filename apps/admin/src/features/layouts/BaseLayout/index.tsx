import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'

export default function BaseLayout() {
  return (
    <main className="flex h-screen overflow-hidden border">
      <Sidebar />
      <div className="flex grow flex-col">
        <Header />
        <Content />
      </div>
    </main>
  )
}
