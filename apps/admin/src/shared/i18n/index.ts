import { I18nInstance } from '@bit-ocean/i18n'

const i18nInstance = new I18nInstance()

i18nInstance
  .useReactI18next()
  .useResources(
    Object.entries(
      import.meta.glob<Record<string, unknown>>(
        '../../../node_modules/@taskward/locales/resources/**/*.json',
        {
          import: 'default',
          eager: true
        }
      )
    )
  )
  .init()

const i18n = i18nInstance.getInstance()

export default i18n
