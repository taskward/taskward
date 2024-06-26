/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './../../routes/__root'
import { Route as PublicRouteImport } from './../../routes/_public/route'
import { Route as BaseRouteImport } from './../../routes/_base/route'
import { Route as SplatRouteImport } from './../../routes/$/route'
import { Route as Base404RouteImport } from './../../routes/_base/404/route'
import { Route as BaseIndexRouteImport } from './../../routes/_base/index/route'

// Create Virtual Routes

const PublicSignupRouteLazyImport = createFileRoute('/_public/signup')()
const PublicLoginRouteLazyImport = createFileRoute('/_public/login')()
const PublicForgotPasswordRouteLazyImport = createFileRoute(
  '/_public/forgot-password',
)()

// Create/Update Routes

const PublicRouteRoute = PublicRouteImport.update({
  id: '/_public',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../../routes/_public/route.lazy').then((d) => d.Route),
)

const BaseRouteRoute = BaseRouteImport.update({
  id: '/_base',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../../routes/_base/route.lazy').then((d) => d.Route),
)

const SplatRouteRoute = SplatRouteImport.update({
  path: '/$',
  getParentRoute: () => rootRoute,
} as any)

const PublicSignupRouteLazyRoute = PublicSignupRouteLazyImport.update({
  path: '/signup',
  getParentRoute: () => PublicRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_public/signup/route.lazy').then((d) => d.Route),
)

const PublicLoginRouteLazyRoute = PublicLoginRouteLazyImport.update({
  path: '/login',
  getParentRoute: () => PublicRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_public/login/route.lazy').then((d) => d.Route),
)

const PublicForgotPasswordRouteLazyRoute =
  PublicForgotPasswordRouteLazyImport.update({
    path: '/forgot-password',
    getParentRoute: () => PublicRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_public/forgot-password/route.lazy').then(
      (d) => d.Route,
    ),
  )

const Base404RouteRoute = Base404RouteImport.update({
  path: '/404',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/404/route.lazy').then((d) => d.Route),
)

const BaseIndexRouteRoute = BaseIndexRouteImport.update({
  path: '/',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/index/route.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/$': {
      id: '/$'
      path: '/$'
      fullPath: '/$'
      preLoaderRoute: typeof SplatRouteImport
      parentRoute: typeof rootRoute
    }
    '/_base': {
      id: '/_base'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof BaseRouteImport
      parentRoute: typeof rootRoute
    }
    '/_public': {
      id: '/_public'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PublicRouteImport
      parentRoute: typeof rootRoute
    }
    '/_base/': {
      id: '/_base/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof BaseIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/404': {
      id: '/_base/404'
      path: '/404'
      fullPath: '/404'
      preLoaderRoute: typeof Base404RouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_public/forgot-password': {
      id: '/_public/forgot-password'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof PublicForgotPasswordRouteLazyImport
      parentRoute: typeof PublicRouteImport
    }
    '/_public/login': {
      id: '/_public/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof PublicLoginRouteLazyImport
      parentRoute: typeof PublicRouteImport
    }
    '/_public/signup': {
      id: '/_public/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof PublicSignupRouteLazyImport
      parentRoute: typeof PublicRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  SplatRouteRoute,
  BaseRouteRoute: BaseRouteRoute.addChildren({
    BaseIndexRouteRoute,
    Base404RouteRoute,
  }),
  PublicRouteRoute: PublicRouteRoute.addChildren({
    PublicForgotPasswordRouteLazyRoute,
    PublicLoginRouteLazyRoute,
    PublicSignupRouteLazyRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/$",
        "/_base",
        "/_public"
      ]
    },
    "/$": {
      "filePath": "$/route.tsx"
    },
    "/_base": {
      "filePath": "_base/route.tsx",
      "children": [
        "/_base/",
        "/_base/404"
      ]
    },
    "/_public": {
      "filePath": "_public/route.tsx",
      "children": [
        "/_public/forgot-password",
        "/_public/login",
        "/_public/signup"
      ]
    },
    "/_base/": {
      "filePath": "_base/index/route.tsx",
      "parent": "/_base"
    },
    "/_base/404": {
      "filePath": "_base/404/route.tsx",
      "parent": "/_base"
    },
    "/_public/forgot-password": {
      "filePath": "_public/forgot-password/route.lazy.tsx",
      "parent": "/_public"
    },
    "/_public/login": {
      "filePath": "_public/login/route.lazy.tsx",
      "parent": "/_public"
    },
    "/_public/signup": {
      "filePath": "_public/signup/route.lazy.tsx",
      "parent": "/_public"
    }
  }
}
ROUTE_MANIFEST_END */
