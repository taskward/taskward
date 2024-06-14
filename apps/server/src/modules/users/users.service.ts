import { Inject, Injectable, Scope } from '@nestjs/common'
import { CustomPrismaService } from '@taskward/prisma'

import { EXTENDED_PRISMA_CLIENT, ExtendedPrismaClient } from '../shared/prisma'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  constructor(
    @Inject(EXTENDED_PRISMA_CLIENT)
    private readonly prisma: CustomPrismaService<ExtendedPrismaClient>
  ) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.client.user.create({
      data: { ...createUserDto, nickName: 'test' }
    })
  }

  async findMany() {
    return this.prisma.client.user.findMany()
  }

  async findOne(id: number) {
    return this.prisma.client.user.findUnique({ where: { id } })
  }

  async update(id: number) {
    return this.prisma.client.user.update({ where: { id }, data: {} })
  }

  async remove(id: number) {
    return this.prisma.client.user.softDelete(id)
  }
}
