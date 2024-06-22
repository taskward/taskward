'use client'

import { HappyProvider } from '@ant-design/happy-work-theme'
import { lightThemeConfigPresets, messageConfig } from '@taskward/theme'
import type { PropsWithChildren } from 'react'

export default function AntdProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider theme={lightThemeConfigPresets}>
      <App message={messageConfig}>
        <HappyProvider>{children}</HappyProvider>
      </App>
    </ConfigProvider>
  )
}
