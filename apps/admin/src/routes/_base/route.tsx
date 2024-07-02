import { createFileRoute, redirect } from '@tanstack/react-router'
import { AuthUtils } from '@taskward/utils'

export const Route = createFileRoute('/_base')({
  beforeLoad: (ctx) => {
    const { location } = ctx
    if (!AuthUtils.isAuthenticated()) {
      throw redirect({
        to: '/login',
        replace: true,
        search: {
          redirect: location.pathname === '/' ? undefined : location.pathname
        }
      })
    }
  }
})
