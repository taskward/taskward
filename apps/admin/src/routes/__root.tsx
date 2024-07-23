import type { QueryClient } from '@tanstack/react-query'
import { Suspense } from 'react'

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools
      }))
    )

const ReactQueryDevtools = lazy(() =>
  import('@tanstack/react-query-devtools').then((res) => ({
    default: res.ReactQueryDevtools
  }))
)

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: Root,
  notFoundComponent: NotFoundComponent
})

function Root() {
  useTitle()

  const [showDevtools, setShowDevtools] = useState(false)

  useEffect(() => {
    window.toggleDevtools = () => setShowDevtools((v) => !v)
  }, [])

  return (
    <>
      <ScrollRestoration />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      <Suspense fallback={null}>
        {showDevtools && (
          <>
            <TanStackRouterDevtools position="bottom-right" />
            <ReactQueryDevtools buttonPosition="bottom-left" />
          </>
        )}
      </Suspense>
    </>
  )
}

function NotFoundComponent() {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  )
}
