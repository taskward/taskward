import AUTH from '../resources/en-US/auth.json'
import COMMON from '../resources/en-US/common.json'

export const resource = {
  COMMON,
  AUTH
} as const

export type I18nResources = typeof resource
