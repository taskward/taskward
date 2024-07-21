import type { PropsWithChildren } from 'react'

export default function Content(props: PropsWithChildren) {
  const { children } = props
  return (
    <Layout.Content className="relative min-h-[calc(100vh-98px)] bg-white p-2 sm:p-4 dark:bg-[#37393e80]">
      {children}
    </Layout.Content>
  )
}
