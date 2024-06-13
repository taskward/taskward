import { DynamicModule, Logger, Module, Provider } from '@nestjs/common'

import { CUSTOM_PRISMA_CLIENT } from './constants'
import { CustomPrismaService } from './custom-prisma.service'
import {
  CustomPrismaClientFactory,
  CustomPrismaModuleAsyncOptions,
  CustomPrismaModuleOptions,
  PrismaClientLike
} from './types'

@Module({})
export class CustomPrismaModule {
  private static readonly logger = new Logger(CustomPrismaModule.name)

  static forRoot<Client extends PrismaClientLike>(
    options: CustomPrismaModuleOptions<Client>
  ): DynamicModule {
    return {
      global: options.isGlobal,
      module: CustomPrismaModule,
      providers: [
        { provide: CUSTOM_PRISMA_CLIENT, useValue: options.client },
        {
          provide: options.name,
          useClass: CustomPrismaService
        }
      ],
      exports: [options.name]
    }
  }

  static forRootAsync<Client extends PrismaClientLike>(
    options: CustomPrismaModuleAsyncOptions<Client>
  ): DynamicModule {
    return {
      global: options.isGlobal,
      module: CustomPrismaModule,
      imports: options.imports || [],
      providers: [
        ...this.createAsyncProvider(options),
        {
          provide: options.name,
          useClass: CustomPrismaService
        }
      ],
      exports: [options.name]
    }
  }

  private static createAsyncProvider<Client extends PrismaClientLike>(
    options: CustomPrismaModuleAsyncOptions<Client>
  ): Provider[] {
    if (options.useFactory) {
      return [
        {
          provide: CUSTOM_PRISMA_CLIENT,
          useFactory: options.useFactory,
          inject: options.inject || []
        }
      ]
    }

    if (options.useClass) {
      return [
        { provide: options.useClass, useClass: options.useClass },
        {
          provide: CUSTOM_PRISMA_CLIENT,
          useFactory: async (optionsFactory: CustomPrismaClientFactory<Client>) =>
            optionsFactory.createPrismaClient(),
          inject: [options.useClass]
        }
      ]
    }

    this.logger.error('You must at least provide `useFactory` or `useClass`.')
    return []
  }
}
