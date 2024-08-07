import { CustomPrismaModule } from '@bit-ocean/prisma'
import { type MiddlewareConsumer, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'

import { HttpExceptionFilter, PrismaExceptionFilter } from '@/core/filters'
import { AccessTokenGuard } from '@/core/guards'
import { ErrorsInterceptor } from '@/core/interceptors'
import { DelayMiddleware } from '@/core/middlewares'
import { AppEnvConfig, DevEnvConfig, JwtEnvConfig, PostgresEnvConfig } from '@/shared/configs'

import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { HealthModule } from './health/health.module'
import { ContextModule } from './shared/context/context.module'
import { LoggerModule } from './shared/logger/logger.module'
import { EXTENDED_PRISMA_CLIENT, extendedPrismaClient } from './shared/prisma'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      cache: true,
      expandVariables: true,
      load: [AppEnvConfig, DevEnvConfig, JwtEnvConfig, PostgresEnvConfig]
    }),
    JwtModule.register({
      global: true
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
    LoggerModule,
    ContextModule,
    HealthModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: AccessTokenGuard },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_FILTER, useClass: PrismaExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: ErrorsInterceptor }
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DelayMiddleware).forRoutes('*')
  }
}
