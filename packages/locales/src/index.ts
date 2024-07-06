import AUTH from '../resources/auth/en-US.json'
import COMMON from '../resources/common/en-US.json'

export const resource = {
  COMMON,
  AUTH
} as const

export type I18nResources = typeof resource
