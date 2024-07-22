import type { PropsWithChildren } from 'react'

interface PageContainerProps extends PropsWithChildren {}

export default function PageContainer(props: PageContainerProps) {
  const { children } = props

  const { title, icon } = useRouteStaticData()

  return (
    <Flex
      vertical
      gap={8}
    >
      <Flex
        align="center"
        gap={8}
      >
        {icon && <span className="mb-0.5 text-xl">{icon}</span>}
        {title && <span className="text-2xl">{title}</span>}
      </Flex>
      {children}
    </Flex>
  )
}
