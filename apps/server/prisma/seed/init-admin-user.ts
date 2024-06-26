import { stdout } from 'node:process'

import { hash } from '@node-rs/bcrypt'
import type { PrismaClient } from '@prisma/client'
import { Prisma } from '@prisma/client'

const ADMIN_USERNAME = 'admin'
const ADMIN_NICKNAME = 'Bruce'
const ADMIN_PASSWORD = '123456'
const ADMIN_EMAIL = 'recall4056@gmail.com'
const ADMIN_AVATAR_URL = 'https://avatars.githubusercontent.com/u/62941121?v=4'

export async function initAdminUser(prisma: PrismaClient) {
  const adminUserInfo = Prisma.validator<Prisma.UserCreateInput>()({
    username: ADMIN_USERNAME,
    nickName: ADMIN_NICKNAME,
    password: await hash(ADMIN_PASSWORD),
    email: ADMIN_EMAIL,
    avatarUrl: ADMIN_AVATAR_URL,
    enabled: true,
    authFlag: true
  })

  const adminUser = await prisma.user.findUnique({
    where: {
      username: ADMIN_USERNAME
    }
  })

  if (adminUser) {
    stdout.write('Super admin already exists, no need to create again!\n')
  } else {
    await prisma.user.create({
      data: {
        ...adminUserInfo
      }
    })
  }

  return prisma
}
