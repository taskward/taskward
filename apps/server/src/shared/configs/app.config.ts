import { env } from 'node:process'

import { registerAs } from '@nestjs/config'

import { EnvUndefinedError } from './env-undefined-error'

export enum AppEnv {
  DEV = 'development',
  STAGING = 'staging',
  PROD = 'production'
}

export const AppEnvConfig = registerAs('app', () => {
  if (!env.SERVER_PORT) {
    throw new EnvUndefinedError('SERVER_PORT')
  }

  if (!env.SERVER_VERSION) {
    throw new EnvUndefinedError('SERVER_VERSION')
  }

  if (!validateNodeEnv(env.NODE_ENV)) {
    throw new EnvUndefinedError('NODE_ENV')
  }

  return Object.freeze({
    APP_PORT: parseInt(env.SERVER_PORT, 10),
    APP_VERSION: env.SERVER_VERSION,
    APP_ENV: env.NODE_ENV,
    IS_DEV: env.NODE_ENV === AppEnv.DEV,
    IS_STAGING: env.NODE_ENV === AppEnv.STAGING,
    IS_PROD: env.NODE_ENV === AppEnv.PROD
  })
})

function validateNodeEnv(nodeEnv?: string): nodeEnv is AppEnv {
  if (!nodeEnv) {
    return false
  }
  return Object.values(AppEnv).includes(nodeEnv as AppEnv)
}
