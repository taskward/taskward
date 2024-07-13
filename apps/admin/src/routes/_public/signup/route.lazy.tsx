import { createLazyFileRoute } from '@tanstack/react-router'

import { SignupPage } from './-components'

export const Route = createLazyFileRoute('/_public/signup')({
  component: SignupPage
})
