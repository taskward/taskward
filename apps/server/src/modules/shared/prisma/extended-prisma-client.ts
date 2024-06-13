import { PrismaClient } from '@prisma/client'
import { softDeleteExtension } from '@taskward/prisma'

export const extendedPrismaClient = new PrismaClient().$extends(softDeleteExtension)

export type ExtendedPrismaClient = typeof extendedPrismaClient
