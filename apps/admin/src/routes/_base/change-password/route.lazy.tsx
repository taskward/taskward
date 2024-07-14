import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/change-password')({
  component: Page
})

function Page() {
  return <div>Change Password</div>
}
