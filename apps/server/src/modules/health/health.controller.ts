import process from 'node:process'

import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import {
  DiskHealthIndicator,
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
  PrismaHealthIndicator
} from '@nestjs/terminus'
import { PrismaClient } from '@prisma/client'

@ApiTags('健康检查')
@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
    private readonly disk: DiskHealthIndicator,
    private readonly memory: MemoryHealthIndicator,
    private readonly prismaHealth: PrismaHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      () =>
        this.http.responseCheck(
          'Taskward API Version',
          'http://localhost:4077/app/version',
          (res) => res.status === 200
        ),
      () =>
        this.disk.checkStorage('storage', {
          thresholdPercent: 1 * 1024 * 1024 * 1024,
          path: process.platform === 'win32' ? 'C:\\' : '/'
        }), // 1GB
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024), // 150MB
      () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024), // 150MB
      async () => this.prismaHealth.pingCheck('prisma', new PrismaClient()) // TODO: Use Prisma shared instance
    ])
  }
}
