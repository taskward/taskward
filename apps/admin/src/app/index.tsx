import { RouterProvider } from '@tanstack/react-router'
import { enableMapSet } from 'immer'

import { AntdProvider } from '@/shared/providers'
import { router } from '@/shared/router'

enableMapSet()

export default function App() {
  return (
    <AntdProvider>
      <RouterProvider router={router} />
    </AntdProvider>
  )
}
