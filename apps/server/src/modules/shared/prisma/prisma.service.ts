import { Inject, Injectable, type OnModuleDestroy, OnModuleInit, Optional } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

import { PRISMA_SERVICE_OPTIONS } from './constants'
import { PrismaServiceOptions } from './interfaces'

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel>
  implements OnModuleInit, OnModuleDestroy
{
  constructor(
    @Optional()
    @Inject(PRISMA_SERVICE_OPTIONS)
    private readonly prismaServiceOptions: PrismaServiceOptions = {}
  ) {
    super(prismaServiceOptions.prismaOptions)

    if (this.prismaServiceOptions.middlewares) {
      this.prismaServiceOptions.middlewares.forEach((middleware) => this.$use(middleware))
    }

    if (this.prismaServiceOptions.extensions) {
      this.prismaServiceOptions.extensions.forEach((extension) => this.$extends(extension))
    }
  }

  async onModuleInit() {
    if (this.prismaServiceOptions.explicitConnect) {
      await this.$connect()
    }
  }

  // NOTE: Use `onModuleDestroy` to ensure that the database is disconnected when the application is shut down.
  async onModuleDestroy() {
    await this.$disconnect()
  }
}
