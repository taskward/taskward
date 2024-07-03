import { createLazyFileRoute } from '@tanstack/react-router'

import { SignupArea } from './-components'

export const Route = createLazyFileRoute('/_public/signup')({
  component: Page
})

function Page() {
  return <SignupArea />
}
