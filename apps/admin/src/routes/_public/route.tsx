import { createFileRoute, redirect } from '@tanstack/react-router'
import { AuthUtils } from '@taskward/utils'

export const Route = createFileRoute('/_public')({
  beforeLoad: () => {
    if (AuthUtils.isAuthenticated()) {
      throw redirect({
        to: '/',
        replace: true
      })
    }
  }
})
