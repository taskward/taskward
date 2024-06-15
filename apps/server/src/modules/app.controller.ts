import { Controller, Get, Inject, Logger } from '@nestjs/common'
import type { ConfigType } from '@nestjs/config'
import { ApiTags } from '@nestjs/swagger'
import { type AppConfig, appConfig } from '@taskward/config'

import { AppEnvConfig } from '@/shared/configs'

@ApiTags('应用')
@Controller('app')
export class AppController {
  constructor(
    @Inject(AppEnvConfig.KEY) private readonly appEnvConfig: ConfigType<typeof AppEnvConfig>
  ) {}

  private readonly logger = new Logger(AppController.name)

  @Get('version')
  getVersion(): string {
    this.logger.log(`获取应用版本：${this.appEnvConfig.APP_VERSION}`)
    return this.appEnvConfig.APP_VERSION
  }

  @Get('info')
  getInfo(): AppConfig {
    this.logger.log('获取应用信息：')
    // eslint-disable-next-line no-console
    console.table(appConfig)
    return appConfig
  }
}
