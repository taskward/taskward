import { I18nInstance } from '@taskward/i18n'

const i18nInstance = new I18nInstance()

i18nInstance.useReactI18next().init()

const i18n = i18nInstance.getInstance()

export default i18n
