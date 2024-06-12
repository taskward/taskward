import { Inject, Injectable, Scope } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { PrismaService } from '@taskward/prisma'

import type { CustomRequest } from '@/shared/interfaces'

import { CreateUserDto } from './dto/create-user.dto'

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
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
    return this.prismaService.user.findMany()
  }

  async findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id }
    })
  }

  async update(id: number) {}

  async remove(id: number) {
    // await this.prismaService.user.delete({
    //   where: { id }
    // })
    // await this.prismaService.user.soft
  }
}
