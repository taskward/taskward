import { Inject, Injectable, Scope } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { CustomPrismaService, PrismaService } from '@taskward/prisma'

import type { CustomRequest } from '@/shared/interfaces'

import { ExtendedPrismaClient } from '../shared/prisma/extended-prisma-client'
import { EXTENDED_PRISMA_CLIENT } from '../shared/prisma/extended-prisma-client.constants'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(EXTENDED_PRISMA_CLIENT)
    private readonly customPrismaService: CustomPrismaService<ExtendedPrismaClient>,
    @Inject(REQUEST) private readonly request: CustomRequest
  ) {}

  async create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        ...createUserDto,
        nickName: 'test'
      }
    })
  }

  async findMany() {
    return this.customPrismaService.client.user.findMany()
    // return this.prismaService.user.findMany()
  }

  async findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id }
    })
  }

  async update(id: number) {}

  async remove(id: number) {
    return this.customPrismaService.client.user.softDelete(1)
    // await this.prismaService.user.delete({
    //   where: { id }
    // })
    // await this.prismaService.user.soft
  }
}
