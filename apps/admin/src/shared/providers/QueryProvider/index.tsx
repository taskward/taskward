import type { PropsWithChildren } from 'react'

export default function QueryProvider(props: PropsWithChildren) {
  const { children } = props
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
