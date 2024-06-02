import { stdout } from 'node:process'

import { PrismaClient } from '@prisma/client'

import { initAdminUser } from './init-admin-user'

const prisma = new PrismaClient()

initAdminUser(prisma)
  .then(() => stdout.write('Seed your database successfully!\n'))
  .catch((err) => console.error(err))
  .finally(() => prisma.$disconnect())
