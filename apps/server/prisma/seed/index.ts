import process from 'node:process'

import { PrismaClient } from '@prisma/client'

import { initAdminUser } from './init-admin-user'

const prisma = new PrismaClient()

const seed = async () => {
  await initAdminUser(prisma)
  process.stdout.write('Seed your database successfully!\n')
}

seed()
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err))
  .finally(async () => {
    await prisma.$disconnect()
    process.exit(0)
  })
