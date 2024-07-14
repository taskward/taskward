import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/profile')({
  component: Page
})

function Page() {
  return <div>Profile</div>
}
