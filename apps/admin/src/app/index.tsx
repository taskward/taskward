import { enableMapSet } from 'immer'

import { BaseLayout } from '@/features/layouts'
import { AntdProvider } from '@/shared/providers'

enableMapSet()

export default function App() {
  return (
    <AntdProvider>
      <BaseLayout />
    </AntdProvider>
  )
}
