import { env } from 'node:process'

import { registerAs } from '@nestjs/config'

import { EnvUndefinedError } from './env-undefined-error'
import type { PostgresConfig } from './interfaces'
import { POSTGRES_CONFIG_KEY } from './tokens'

export const postgresConfig = registerAs<PostgresConfig>(POSTGRES_CONFIG_KEY, () => {
  if (!env.POSTGRES_USER) {
    throw new EnvUndefinedError('POSTGRES_USER')
  }
  if (!env.POSTGRES_PASSWORD) {
    throw new EnvUndefinedError('POSTGRES_PASSWORD')
  }
  if (!env.POSTGRES_DB) {
    throw new EnvUndefinedError('POSTGRES_DB')
  }
  if (!env.POSTGRES_HOST) {
    throw new EnvUndefinedError('POSTGRES_HOST')
  }
  if (!env.POSTGRES_PORT) {
    throw new EnvUndefinedError('POSTGRES_PORT')
  }
  if (!env.POSTGRES_URL) {
    throw new EnvUndefinedError('POSTGRES_URL')
  }

  return Object.freeze({
    POSTGRES_USER: env.POSTGRES_USER,
    POSTGRES_PASSWORD: env.POSTGRES_PASSWORD,
    POSTGRES_DB: env.POSTGRES_DB,
    POSTGRES_HOST: env.POSTGRES_HOST,
    POSTGRES_PORT: parseInt(env.POSTGRES_PORT, 10),
    POSTGRES_URL: env.POSTGRES_URL
  })
})
