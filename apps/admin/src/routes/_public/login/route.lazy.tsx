import { createLazyFileRoute } from '@tanstack/react-router'

import { LoginArea } from './-components'

export const Route = createLazyFileRoute('/_public/login')({
  component: Page
})

function Page() {
  return <LoginArea />
}
