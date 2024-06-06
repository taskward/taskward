import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { type AppConfig, appConfig } from '@taskward/config'

@ApiTags('App')
@Controller('app')
export class AppController {
  @Get('version')
  getVersion(): string {
    return '1.0.0'
  }

  @Get('info')
  getInfo(): AppConfig {
    return appConfig
  }
}
