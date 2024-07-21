import type { PropsWithChildren } from 'react'

interface PageContainerProps extends PropsWithChildren {}

export default function PageContainer(props: PageContainerProps) {
  const { children } = props

  const routeStaticData = useRouteStaticData()

  return (
    <Flex
      vertical
      gap={12}
    >
      <span className="text-2xl">{routeStaticData.title}</span>
      {children}
    </Flex>
  )
}
