import type { DEFAULT_NS } from '@taskward/i18n'

import type { I18nResources } from '../src'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NS
    resources: I18nResources
  }
}
