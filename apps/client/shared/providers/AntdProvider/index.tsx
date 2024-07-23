'use client'

import 'dayjs/locale/zh-cn'

import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { lightThemeConfigPresets, messageConfig } from '@bit-ocean/theme'
import { message } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import type { PropsWithChildren } from 'react'

message.config(messageConfig)

const px2rem = px2remTransformer({
  rootValue: 16,
  mediaQuery: true
})

export default function AntdProvider({ children }: PropsWithChildren) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          ...lightThemeConfigPresets,
          cssVar: true,
          hashed: false
        }}
        locale={zhCN}
      >
        <StyleProvider
          layer
          transformers={[px2rem]}
        >
          <App message={messageConfig}>
            <HappyProvider>{children}</HappyProvider>
          </App>
        </StyleProvider>
      </ConfigProvider>
    </AntdRegistry>
  )
}
