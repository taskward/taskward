import { QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

export default function QueryProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
