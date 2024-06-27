import { Body, Controller, Post, Query, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { SkipThrottle } from '@nestjs/throttler'

import { RefreshTokenGuard } from '@/core/guards'
import { R } from '@/shared/class'
import { SkipAuth } from '@/shared/decorators'

import { AuthService } from './auth.service'
import type { LoginDto, SignupDto } from './dto'

@ApiTags('认证')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '注册' })
  @SkipThrottle()
  @SkipAuth()
  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return new R({
      data: await this.authService.signup(signupDto),
      msg: '注册成功'
    })
  }

  @ApiOperation({ summary: '登录' })
  @SkipThrottle()
  @SkipAuth()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return new R({
      data: await this.authService.login(loginDto),
      msg: '登录成功'
    })
  }

  @ApiOperation({ summary: '登出' })
  @Post('logout')
  async logout() {
    await this.authService.logout()
    return new R({ msg: '登出成功' })
  }

  @ApiOperation({ summary: '强制下线' })
  @Post('force-logout')
  async forceLogout(@Query('jti') jti: string) {
    await this.authService.forceLogout(jti)
    return new R({ msg: '强制下线成功' })
  }

  @ApiOperation({ summary: '刷新令牌' })
  @SkipThrottle()
  @SkipAuth()
  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  async refresh() {
    return new R({
      data: await this.authService.refreshTokens()
    })
  }
}
