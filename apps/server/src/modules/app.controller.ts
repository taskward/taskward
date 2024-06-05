import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { type AppConfig, appConfig } from '@taskward/config'

import { AppService } from './app.service'

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('version')
  getVersion(): string {
    return '1.0.0'
  }

  @Get('info')
  getInfo(): AppConfig {
    return appConfig
  }
}
