import { BadRequestException, Injectable } from '@nestjs/common'
import { compare } from '@node-rs/bcrypt'
import { plainToClass } from 'class-transformer'

import type { CustomRequest, JwtPayload } from '@/shared/interfaces'

import { UserVo } from '../users/vo'
import type { LoginDto } from './dto'

@Injectable()
export class AuthService {
  // constructor(private readonly prismaService: PrismaService) {}

  async login(loginDto: LoginDto, req: CustomRequest) {
    const userVo = await this.loginByUsername(loginDto)

    const { id } = userVo
    const jwtPayload: JwtPayload = { sub: id, jti: '' }

    req.jwtPayload = jwtPayload
  }

  async loginByUsername(loginDto: LoginDto) {
    const { username, password } = loginDto
    const user = {
      password: ''
    }
    // await this.prismaService.user.findUnique({
    //   where: {
    //     username,
    //     enabled: true,
    //     deletedAt: null
    //   }
    // })

    if (!user) {
      throw new BadRequestException('用户名不存在')
    }

    if (!(await compare(password, user.password))) {
      throw new BadRequestException('账户、密码错误')
    }

    const userVo = plainToClass(UserVo, user)

    return userVo
  }

  async generateTokens(jwtPayload: JwtPayload) {}

  async refreshToken(jwtPayload: JwtPayload) {}
}
