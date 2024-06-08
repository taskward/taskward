import type { ModuleMetadata, Type } from '@nestjs/common'
import type { Prisma } from '@prisma/client'

export interface PrismaModuleOptions {
  /**
   * If `true`, the `PrismaService` will be a global module.
   */
  isGlobal?: boolean
  options?: PrismaServiceOptions
}

export interface PrismaServiceOptions {
  /**
   * Pass options directly to the `PrismaClient`.
   * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference/#prismaclient
   */
  prismaOptions?: Prisma.PrismaClientOptions
  /**
   * If `true`, the `PrismaClient` explicitly creates a connection pool and your first query will respond instantly.
   * For most use cases the lazy connect behavior of `PrismaClient` will do. The first query of `PrismaClient` creates the connection pool.
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/connection-management
   */
  explicitConnect?: boolean
  /**
   * Apply Prisma middlewares to perform actions before or after db queries.
   * @deprecated
   * @see https://www.prisma.io/docs/orm/prisma-client/client-extensions/middleware
   */
  middlewares?: Prisma.Middleware[]
  /**
   * Apply Prisma extensions to extend the functionality of the Prisma Client.
   * @see https://www.prisma.io/docs/orm/prisma-client/client-extensions
   */
  extensions?: ReturnType<typeof Prisma.defineExtension>[]
}

export interface PrismaOptionsFactory {
  createPrismaOptions(): PrismaServiceOptions | Promise<PrismaServiceOptions>
}

export interface PrismaModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  isGlobal?: boolean
  useExisting?: Type<PrismaOptionsFactory>
  useClass?: Type<PrismaOptionsFactory>
  useFactory?: (...args: any[]) => PrismaServiceOptions | Promise<PrismaServiceOptions>
  inject?: any[]
}
