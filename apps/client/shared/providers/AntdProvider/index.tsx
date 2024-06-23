'use client'

import { StyleProvider } from '@ant-design/cssinjs'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { lightThemeConfigPresets, messageConfig } from '@taskward/theme'
import type { PropsWithChildren } from 'react'

export default function AntdProvider({ children }: PropsWithChildren) {
  return (
    <AntdRegistry>
      <StyleProvider layer>
        <ConfigProvider theme={{ cssVar: true, hashed: false, ...lightThemeConfigPresets }}>
          <App message={messageConfig}>
            <HappyProvider>{children}</HappyProvider>
          </App>
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  )
}
