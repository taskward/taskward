import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { CustomPrismaService } from '@taskward/prisma'

import { EXTENDED_PRISMA_CLIENT, ExtendedPrismaClient } from '../shared/prisma'
import { RequestContextService } from '../shared/request-context/request-context.service'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @Inject(EXTENDED_PRISMA_CLIENT)
    private readonly prisma: CustomPrismaService<ExtendedPrismaClient>,
    private readonly requestContextService: RequestContextService
  ) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.client.user.create({
      data: { ...createUserDto, nickName: 'test' }
    })
  }

  async findMany() {
    return this.prisma.client.user.findMany()
  }

  async findCurrent() {
    const id = this.requestContextService.getUserId()
    const user = await this.prisma.client.user.findUnique({
      where: {
        id,
        // enabled: true,
        // authFlag: true,
        deletedAt: null
      }
    })
    if (!user) {
      throw new UnauthorizedException('用户授权失败')
    }
    return user
  }

  async findOne(id: number) {
    const user = this.prisma.client.user.findUnique({
      where: {
        id,
        deletedAt: null
      }
    })
    if (!user) {
      throw new NotFoundException('用户不存在')
    }
    return user
  }

  async update(id: number) {
    return this.prisma.client.user.update({ where: { id }, data: {} })
  }

  async remove(id: number) {
    return this.prisma.client.user.softDelete(id)
  }
}
