import { env } from 'node:process'

import { registerAs } from '@nestjs/config'

export const DevEnvConfig = registerAs('dev', () =>
  Object.freeze({
    delaySeconds: env.DEV_DELAY_SECONDS ? parseInt(env.DEV_DELAY_SECONDS, 10) : 0,
    enableRequestLog: env.DEV_ENABLE_REQUEST_LOG === 'true',
    enablePrismaLog: env.DEV_ENABLE_PRISMA_LOG === 'true',
    enableSwagger: env.DEV_ENABLE_SWAGGER === 'true'
  })
)
