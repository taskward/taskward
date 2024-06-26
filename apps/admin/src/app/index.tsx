import { RouterProvider } from '@tanstack/react-router'
import { enableMapSet } from 'immer'

import { AntdProvider, QueryProvider } from '@/shared/providers'
import { router } from '@/shared/router'

enableMapSet()

export default function App() {
  return (
    <QueryProvider>
      <AntdProvider>
        <RouterProvider router={router} />
      </AntdProvider>
    </QueryProvider>
  )
}
