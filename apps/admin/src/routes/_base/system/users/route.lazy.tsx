import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/system/users')({
  component: Page
})

function Page() {
  return <div>User Management</div>
}
