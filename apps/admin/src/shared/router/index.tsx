import nprogress from 'nprogress'
import type { ReactNode } from 'react'

import { queryClient } from '../query-client'
import { routeTree } from './routeTree.gen'

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0, // We use @tanstack/react-query, so we don't need to cache the data in the router.
  defaultPendingComponent: GlobalLoading,
  defaultErrorComponent: () => (
    <ErrorPage
      title="出错了"
      subTitle="🚧 请联系系统管理员"
    />
  )
})

export const getRouterStaticData = (path: string) =>
  router.matchRoutes(path, {}).at(-1)!.staticData ?? {}

// NProgress
nprogress.configure({ showSpinner: false })
router.subscribe('onBeforeLoad', ({ pathChanged }) => pathChanged && nprogress.start())
router.subscribe('onLoad', () => nprogress.done())

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }

  interface StaticDataRouteOption {
    title?: string
    icon?: ReactNode
  }
}
