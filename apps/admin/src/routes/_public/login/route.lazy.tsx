import { createLazyFileRoute } from '@tanstack/react-router'

import { LoginPage } from './-components'

export const Route = createLazyFileRoute('/_public/login')({
  component: LoginPage
})
