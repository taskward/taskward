import '@/shared/i18n'
import '@/shared/echarts'

import { RouterProvider } from '@tanstack/react-router'
import { enableMapSet } from 'immer'

enableMapSet()

export default function App() {
  return (
    <QueryProvider>
      <AntdProvider>
        <AxiosProvider>
          <RouterProvider router={router} />
        </AxiosProvider>
      </AntdProvider>
    </QueryProvider>
  )
}
