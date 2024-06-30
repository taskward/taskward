import { createLazyFileRoute } from '@tanstack/react-router'

import { CarouselArea, LoginArea, PageContainer } from './-components'

export const Route = createLazyFileRoute('/_public/login')({
  component: Page
})

function Page() {
  return (
    <PageContainer>
      <CarouselArea />
      <LoginArea />
    </PageContainer>
  )
}
