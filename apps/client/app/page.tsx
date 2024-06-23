import { Content, Header, Sidebar } from '@/features/layouts/BaseLayout'

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
