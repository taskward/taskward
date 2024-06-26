import { RouterProvider } from '@tanstack/react-router'
import { enableMapSet } from 'immer'

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
