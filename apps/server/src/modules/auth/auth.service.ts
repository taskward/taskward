import { CustomPrismaService } from '@bit-ocean/prisma'
import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotImplementedException
} from '@nestjs/common'
import type { ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { compare, hash } from '@node-rs/bcrypt'
import { plainToClass } from 'class-transformer'

import { JwtEnvConfig } from '@/shared/configs'
import type { JwtPayload, WrapperType } from '@/shared/interfaces'
import { GeneratorUtils } from '@/shared/utils'

import { ContextService } from '../shared/context/context.service'
import { EXTENDED_PRISMA_CLIENT, type ExtendedPrismaClient } from '../shared/prisma'
// eslint-disable-next-line import/no-cycle
import { UsersService } from '../users/users.service'
import { UserVo } from '../users/vo'
import type { LoginDto, SignupDto } from './dto'
import { TokenVo } from './vo'

@Injectable()
export class AuthService {
  constructor(
    @Inject(EXTENDED_PRISMA_CLIENT)
    private readonly prisma: CustomPrismaService<ExtendedPrismaClient>,
    @Inject(JwtEnvConfig.KEY) private readonly jwtEnvConfig: ConfigType<typeof JwtEnvConfig>,
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: WrapperType<UsersService>,
    private readonly contextService: ContextService
  ) {}

  async signup(signupDto: SignupDto) {
    const userVo = await this.usersService.create({
      ...signupDto,
      enabled: true,
      authFlag: true
    })

    const { id: sub } = userVo

    const jwtPayload: JwtPayload = {
      sub,
      jti: GeneratorUtils.generateUuid()
    }

    const tokens = await this.generateTokens(jwtPayload)
    const tokenVo = new TokenVo(tokens)

    // TODO: Add jwt to Redis for blacklisting
    this.contextService.setJwtPayload(jwtPayload)

    return tokenVo
  }

  async login(loginDto: LoginDto) {
    const userVo = await this.loginByUsername(loginDto)

    const { id: sub } = userVo

    const jwtPayload: JwtPayload = {
      sub,
      jti: GeneratorUtils.generateUuid()
    }

    const tokens = await this.generateTokens(jwtPayload)
    const tokenVo = new TokenVo({ ...tokens })

    // TODO: Add jwt to Redis for blacklisting
    this.contextService.setJwtPayload(jwtPayload)

    return tokenVo
  }

  async loginByUsername(loginDto: LoginDto) {
    const { username, password } = loginDto
    const user = await this.prisma.client.user.findUnique({
      where: {
        username,
        enabled: true,
        authFlag: true,
        deletedAt: null
      }
    })

    if (!user) {
      throw new BadRequestException('用户名不存在')
    }

    if (!(await compare(password, user.password))) {
      throw new BadRequestException('账户或密码错误')
    }

    const userVo = plainToClass(UserVo, user)

    return userVo
  }

  async logout() {
    throw new NotImplementedException('暂不支持该方法')
  }

  async forceLogout(jti: string) {
    console.log(jti)
    throw new NotImplementedException('暂不支持该方法')
  }

  private async generateTokens(payload: JwtPayload) {
    const {
      accessTokenSecret,
      accessTokenExp,
      accessTokenIss,
      refreshTokenSecret,
      refreshTokenExp,
      refreshTokenIss
    } = this.jwtEnvConfig
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { ...payload, iss: accessTokenIss },
        { secret: accessTokenSecret, expiresIn: accessTokenExp }
      ),
      this.jwtService.signAsync(
        { ...payload, iss: refreshTokenIss },
        { secret: refreshTokenSecret, expiresIn: refreshTokenExp }
      )
    ])

    return { accessToken, refreshToken }
  }

  async refreshTokens() {
    const { sub, jti } = this.contextService.getJwtPayload()
    const user = await this.usersService.findOne(sub)

    const tokenVo = await this.generateTokens({
      sub: user.id,
      jti
    })

    return new TokenVo(tokenVo)
  }

  async hashPassword(password: string) {
    return hash(password)
  }
}
