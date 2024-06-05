import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { AppService } from './app.service'

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('health')
  healthCheck(): string {
    return 'OK'
  }

  @Get('version')
  getVersion(): string {
    return '1.0.0'
  }
}
