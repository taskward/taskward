import type { AnyRouter } from '@tanstack/react-router'
import type { MessageInstance } from 'antd/es/message/interface'
import type { AxiosRequestConfig } from 'axios'
import type { i18n } from 'i18next'

export interface AxiosInstanceOptions {
  /**
   * If set, only the requests with the url starting with this prefix will be added the Authorization header.
   */
  baseAPIPrefix?: string
  /**
   * If set to `true`, the refresh token logic will be enabled.
   */
  enableRefreshToken?: boolean
  /**
   * When unauthorized, redirect to this url.
   * @default '/login'
   */
  unauthorizedRedirectUrl?: string
}

export interface PendingRequest {
  /**
   * Request config.
   */
  config?: AxiosRequestConfig
  /**
   * Request promise resolve.
   */
  resolve: (value: unknown) => void
}

export interface InterceptorInitOptions {
  /**
   * Tanstack Router instance.
   */
  router?: AnyRouter
  /**
   * i18n instance.
   */
  i18n?: i18n
  /**
   * antd Message instance.
   */
  message?: MessageInstance
}

export interface R<T = any> {
  msg: string
  data: T
}

export interface Tokens {
  accessToken: string
  refreshToken: string
}
