import 'dayjs/locale/zh-cn'

import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { messageConfig } from '@taskward/theme'
import { message } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import type { PropsWithChildren } from 'react'

dayjs.extend(customParseFormat)

message.config(messageConfig)

const px2rem = px2remTransformer({
  rootValue: 16,
  mediaQuery: true
})

export default function AntdProvider(props: PropsWithChildren) {
  const { children } = props

  const themeStore = useThemeStore()

  return (
    <ConfigProvider
      theme={{
        ...(themeStore.isLightTheme() ? themeStore.lightThemeConfig : themeStore.darkThemeConfig),
        cssVar: true,
        hashed: false
      }}
      locale={zhCN}
    >
      <StyleProvider
        // TODO: https://github.com/ant-design/ant-design/issues/49377
        layer={false}
        transformers={[px2rem]}
      >
        <App message={messageConfig}>
          <HappyProvider>{children}</HappyProvider>
        </App>
      </StyleProvider>
    </ConfigProvider>
  )
}
