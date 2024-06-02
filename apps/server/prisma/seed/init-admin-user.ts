import { stdout } from 'node:process'

import { hash } from '@node-rs/bcrypt'
import type { Prisma, PrismaClient } from '@prisma/client'

const ADMIN_USERNAME = 'admin'
const ADMIN_NICKNAME = 'Bruce'
const ADMIN_PASSWORD = '123456'
const ADMIN_EMAIL = 'recall4056@gmail.com'
const ADMIN_AVATAR_URL = 'https://avatars.githubusercontent.com/u/62941121?v=4'

export async function initAdminUser(prisma: PrismaClient) {
  const adminUserInfo = {
    username: ADMIN_USERNAME,
    nickName: ADMIN_NICKNAME,
    password: await hash(ADMIN_PASSWORD),
    email: ADMIN_EMAIL,
    avatarUrl: ADMIN_AVATAR_URL,
    enabled: true
  } satisfies Prisma.UserCreateInput

  const adminUser = await prisma.user.findUnique({
    where: {
      username: ADMIN_USERNAME
    }
  })

  if (adminUser) {
    stdout.write('超级管理员已存在，无需重复创建\n')
  } else {
    await prisma.user.create({
      data: {
        ...adminUserInfo
      }
    })
  }

  return prisma
}
