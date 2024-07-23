import { softDeleteExtension } from '@bit-ocean/prisma'
import { PrismaClient } from '@prisma/client'

export const extendedPrismaClient = new PrismaClient().$extends(softDeleteExtension)

export const EXTENDED_PRISMA_CLIENT = 'EXTENDED_PRISMA_CLIENT'

export type ExtendedPrismaClient = typeof extendedPrismaClient
