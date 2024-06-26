import { createRouter } from '@tanstack/react-router'
import type { JSXElementConstructor } from 'react'

import { routeTree } from '@/routeTree.gen'

import { queryClient } from '../query-client'

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent', // 默认预加载策略
  defaultPreloadStaleTime: 0, // 使用外部缓存库 Tanstack Query 来管理缓存，需要设置为 0
  defaultPendingComponent: GlobalLoading,
  defaultErrorComponent: () => <div>error</div>
})

export const getRouterStaticData = (path: string) =>
  router.matchRoutes(path, {}).at(-1)!.staticData ?? {}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }

  interface StaticDataRouteOption {
    title?: string
    icon?: React.ReactElement<any, string | JSXElementConstructor<any>>
  }
}
