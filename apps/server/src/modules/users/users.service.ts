import { Injectable } from '@nestjs/common'

import { PrismaService } from '../shared/prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto, createdBy: number) {
    return 'This action adds a new user'
  }

  findAll() {
    return this.prismaService.user.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }
}
