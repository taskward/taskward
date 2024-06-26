import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { SkipThrottle } from '@nestjs/throttler'

import { RefreshTokenGuard } from '@/core/guards'
import { SkipAuth } from '@/shared/decorators'
import type { CustomRequest } from '@/shared/interfaces'

import { AuthService } from './auth.service'
import type { LoginDto } from './dto'

@ApiTags('认证')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '注册' })
  @SkipThrottle()
  @SkipAuth()
  @Post('signup')
  async signup() {}

  @ApiOperation({ summary: '登录' })
  @SkipThrottle()
  @SkipAuth()
  @Post('login')
  async login(@Body() loginDto: LoginDto, @Req() req: CustomRequest) {
    return this.authService.login(loginDto, req)
  }

  @ApiOperation({ summary: '登出' })
  @Post('logout')
  async logout() {}

  @ApiOperation({ summary: '强制下线' })
  @Post('force-logout')
  async forceLogout() {}

  @ApiOperation({ summary: '刷新令牌' })
  @SkipThrottle()
  @SkipAuth()
  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  async refresh() {}
}
