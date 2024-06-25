import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { Suspense } from 'react'

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools
      }))
    )

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFoundComponent
})

function Root() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
      <Suspense fallback={null}>
        <TanStackRouterDevtools position="bottom-right" />
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
