import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/system/users/$id')({
  component: Page
})

function Page() {
  return <PageContainer>123</PageContainer>
}
