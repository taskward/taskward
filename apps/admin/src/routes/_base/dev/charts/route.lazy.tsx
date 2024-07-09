import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/dev/charts')({
  component: Page
})

function Page() {
  return (
    <Flex
      vertical
      gap={12}
    >
      <span>Echarts Demo</span>
    </Flex>
  )
}
