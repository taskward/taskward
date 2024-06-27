import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { CustomPrismaService } from '@taskward/prisma'
import { plainToClass } from 'class-transformer'

// eslint-disable-next-line import/no-cycle
import { AuthService } from '../auth/auth.service'
import { ContextService } from '../shared/context/context.service'
import { EXTENDED_PRISMA_CLIENT, ExtendedPrismaClient } from '../shared/prisma'
import { CreateUserDto } from './dto/create-user.dto'
import { UserVo } from './vo'

@Injectable()
export class UsersService {
  constructor(
    @Inject(EXTENDED_PRISMA_CLIENT)
    private readonly prisma: CustomPrismaService<ExtendedPrismaClient>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    private readonly contextService: ContextService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createdBy = this.contextService.getUserId()
    const password = await this.authService.hashPassword(createUserDto.password)
    const user = await this.prisma.client.user.create({
      data: {
        ...createUserDto,
        password,
        createdBy
      },
      omit: {
        password: true
      }
    })
    const userVo = plainToClass(UserVo, user)
    return userVo
  }

  async findMany() {
    return this.prisma.client.user.findMany()
  }

  async findCurrent() {
    const id = this.contextService.getUserId()
    const user = await this.prisma.client.user.findUnique({
      where: {
        id,
        enabled: true,
        authFlag: true,
        deletedAt: null
      }
    })
    if (!user) {
      throw new UnauthorizedException('用户授权失败')
    }
    const userVo = plainToClass(UserVo, user)
    return userVo
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
    const userVo = plainToClass(UserVo, user)
    return userVo
  }

  async update(id: number) {
    return this.prisma.client.user.update({
      where: {
        id
      },
      data: {}
    })
  }

  async remove(id: number) {
    return this.prisma.client.user.softDelete(id)
  }
}
