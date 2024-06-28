import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_base')({
  beforeLoad: () => {
    if (!localStorage.getItem('accessToken')) {
      throw redirect({
        to: '/login',
        replace: true
      })
    }
  }
})
