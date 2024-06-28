import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
  beforeLoad: () => {
    if (localStorage.getItem('accessToken')) {
      throw redirect({
        to: '/',
        replace: true
      })
    }
  }
})
