import { Lang, LangUtils } from '@taskward/utils'
import type { Locale } from 'antd/lib/locale'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

import { getDefaultLocale } from '@/features/antd'

interface State {
  lang: string
  locale: Locale
}

interface Actions {
  setLang: (lang: string) => void
  setLocale: (locale: Locale) => void
}

const initialState: State = {
  lang: LangUtils.getDefaultLang(Lang['en-US']),
  locale: getDefaultLocale()
}

export const useLangStore = create<State & Actions>()(
  devtools(
    subscribeWithSelector((set) => ({
      ...initialState,
      setLang: (lang: string) => set({ lang }),
      setLocale: (locale: Locale) => set({ locale })
    }))
  )
)

useLangStore.subscribe(
  (state) => state.lang,
  async (lang) => {
    i18n.changeLanguage(lang)
    LangUtils.setLang(lang)
    LangUtils.setHtmlLang(lang)
    switch (lang) {
      case Lang['zh-CN']: {
        useLangStore.setState({ locale: zhCN })
        break
      }
      case Lang['en-US']: {
        useLangStore.setState({ locale: enUS })
        break
      }
      default: {
        break
      }
    }
  },
  {
    fireImmediately: true
  }
)
