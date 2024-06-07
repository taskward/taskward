import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { postgresConfig } from '@/shared/configs'

import { AppController } from './app.controller'
import { HealthModule } from './health/health.module'
import { PrismaModule } from './shared/prisma/prisma.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env.local', '../../.env'],
      cache: true,
      expandVariables: true,
      load: [postgresConfig]
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        explicitConnect: true,
        prismaOptions: {}
      }
    }),
    HealthModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
