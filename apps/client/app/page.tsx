import { Content, Header, Sidebar } from './components'

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <Header />
      <div className="flex grow">
        <Sidebar />
        <Content />
      </div>
    </main>
  )
}
