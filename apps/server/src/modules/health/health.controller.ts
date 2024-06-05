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

@ApiTags('Health Check')
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
          'Taskward API',
          'http://localhost:4077/info',
          (res) => res.status === 200
        ),
      () =>
        this.disk.checkStorage('storage', { thresholdPercent: 1 * 1024 * 1024 * 1024, path: '/' }), // 1GB
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024), // 150MB
      () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024), // 150MB
      async () => this.prismaHealth.pingCheck('prisma', new PrismaClient()) // TODO: Use Prisma shared instance
    ])
  }
}
