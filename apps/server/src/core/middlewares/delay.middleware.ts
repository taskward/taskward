import { Inject, Injectable, type NestMiddleware } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import type { NextFunction, Request, Response } from 'express'

import { AppEnvConfig, DevEnvConfig } from '@/shared/configs'

@Injectable()
export class DelayMiddleware implements NestMiddleware {
  constructor(
    @Inject(AppEnvConfig.KEY) private readonly appEnvConfig: ConfigType<typeof AppEnvConfig>,
    @Inject(DevEnvConfig.KEY) private readonly devEnvConfig: ConfigType<typeof DevEnvConfig>
  ) {}

  use(_req: Request, _res: Response, next: NextFunction) {
    const { IS_DEV } = this.appEnvConfig
    const { delaySeconds } = this.devEnvConfig
    if (!IS_DEV) {
      next()
    } else {
      setTimeout(next, delaySeconds * 1000)
    }
  }
}
