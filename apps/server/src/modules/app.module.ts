import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { CustomPrismaModule } from '@taskward/prisma'

import { postgresConfig } from '@/shared/configs'

import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { HealthModule } from './health/health.module'
import { EXTENDED_PRISMA_CLIENT, extendedPrismaClient } from './shared/prisma'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env.local', '../../.env'],
      cache: true,
      expandVariables: true,
      load: [postgresConfig]
    }),
    CustomPrismaModule.forRootAsync({
      isGlobal: true,
      name: EXTENDED_PRISMA_CLIENT,
      useFactory: () => extendedPrismaClient
    }),
    ThrottlerModule.forRoot([
      { name: 'short', ttl: 1000, limit: 10 },
      { name: 'medium', ttl: 10000, limit: 100 },
      { name: 'long', ttl: 60000, limit: 600 }
    ]),
    HealthModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }]
})
export class AppModule {}
