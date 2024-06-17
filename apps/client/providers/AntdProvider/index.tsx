'use client'

import { HappyProvider } from '@ant-design/happy-work-theme'
import type { PropsWithChildren } from 'react'

export default function AntdProvider({ children }: PropsWithChildren) {
  return <HappyProvider>{children}</HappyProvider>
}
