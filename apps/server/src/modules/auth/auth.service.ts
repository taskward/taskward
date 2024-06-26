import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import type { ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { compare } from '@node-rs/bcrypt'
import { CustomPrismaService } from '@taskward/prisma'
import { plainToClass } from 'class-transformer'

import { JwtEnvConfig } from '@/shared/configs'
import type { CustomRequest, JwtPayload } from '@/shared/interfaces'

import { EXTENDED_PRISMA_CLIENT, type ExtendedPrismaClient } from '../shared/prisma'
import { UserVo } from '../users/vo'
import type { LoginDto } from './dto'

@Injectable()
export class AuthService {
  constructor(
    @Inject(EXTENDED_PRISMA_CLIENT)
    private readonly prisma: CustomPrismaService<ExtendedPrismaClient>,
    @Inject(JwtEnvConfig.KEY) private readonly jwtEnvConfig: ConfigType<typeof JwtEnvConfig>,
    private readonly jwtService: JwtService
  ) {}

  async login(loginDto: LoginDto, req: CustomRequest) {
    const userVo = await this.loginByUsername(loginDto)

    const { id } = userVo
    const jwtPayload: JwtPayload = { sub: id, jti: '' }

    req.jwtPayload = jwtPayload
  }

  async loginByUsername(loginDto: LoginDto) {
    const { username, password } = loginDto
    const user = await this.prisma.client.user.findUnique({
      where: {
        username,
        enabled: true,
        deletedAt: null
      }
    })

    if (!user) {
      throw new BadRequestException('用户名不存在')
    }

    if (!(await compare(password, user.password))) {
      throw new BadRequestException('账户、密码错误')
    }

    const userVo = plainToClass(UserVo, user)

    return userVo
  }

  private async generateTokens(payload: JwtPayload) {
    const { accessTokenSecret, accessTokenExp, refreshTokenSecret, refreshTokenExp } =
      this.jwtEnvConfig
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, { secret: accessTokenSecret, expiresIn: accessTokenExp }),
      this.jwtService.signAsync(payload, { secret: refreshTokenSecret, expiresIn: refreshTokenExp })
    ])

    return { accessToken, refreshToken }
  }

  async refreshToken(jwtPayload: JwtPayload) {}
}
