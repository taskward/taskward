import type { PropsWithChildren } from 'react'

export function PageContainer(props: PropsWithChildren) {
  const { children } = props

  return <div className="flex h-screen space-x-8 p-8">{children}</div>
}
