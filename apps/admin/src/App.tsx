import { Content, Header, Sidebar } from './pages/components'

function App() {
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

export default App
