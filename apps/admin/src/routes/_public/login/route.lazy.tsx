import { createLazyFileRoute } from '@tanstack/react-router'

import { LoginArea, PageContainer } from './-components'

export const Route = createLazyFileRoute('/_public/login')({
  component: Page
})

function Page() {
  return (
    <PageContainer>
      <LoginArea />
    </PageContainer>
  )
}
