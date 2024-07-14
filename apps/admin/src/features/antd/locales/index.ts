import { Lang, LangUtils } from '@taskward/utils'
import type { Locale } from 'antd/lib/locale'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'

export const getDefaultLocale = (): Locale => {
  const lang = LangUtils.getDefaultLang(Lang['zh-CN'])
  switch (lang) {
    case Lang['zh-CN']:
      return zhCN
    case Lang['en-US']:
      return enUS
    default:
      return enUS
  }
}
