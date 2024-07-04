import { Body, Controller, HttpCode, HttpStatus, Post, Query, UseGuards } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger'
import { SkipThrottle } from '@nestjs/throttler'

import { RefreshTokenGuard } from '@/core/guards'
import { R } from '@/shared/class'
import { ApiCreatedObjectResponse, ApiOkObjectResponse, IsPublic } from '@/shared/decorators'

import { AuthService } from './auth.service'
import { LoginDto, RefreshDto, SignupDto } from './dto'
import { TokenVo } from './vo'

@ApiTags('认证')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '注册' })
  @ApiCreatedObjectResponse(TokenVo)
  @ApiBody({
    type: SignupDto,
    examples: {
      user: {
        value: {
          username: 'admin',
          nickName: 'Bruce',
          password: '123456',
          birthDate: '1999-01-01',
          email: 'bruce@example.com'
        }
      }
    }
  })
  @SkipThrottle()
  @IsPublic()
  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return new R({
      data: await this.authService.signup(signupDto),
      msg: '注册成功'
    })
  }

  @ApiOperation({ summary: '登录' })
  @ApiOkObjectResponse(TokenVo)
  @ApiBody({
    type: LoginDto,
    examples: {
      admin: {
        value: {
          username: 'admin',
          password: '123456'
        }
      }
    }
  })
  @SkipThrottle()
  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return new R({
      data: await this.authService.login(loginDto),
      msg: '登录成功'
    })
  }

  @ApiOperation({ summary: '登出' })
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout() {
    await this.authService.logout()
    return new R({ msg: '登出成功' })
  }

  @ApiOperation({ summary: '强制下线' })
  @HttpCode(HttpStatus.OK)
  @Post('force-logout')
  async forceLogout(@Query('jti') jti: string) {
    await this.authService.forceLogout(jti)
    return new R({ msg: '强制下线成功' })
  }

  @ApiOperation({ summary: '刷新令牌' })
  @ApiOkObjectResponse(TokenVo)
  @ApiBody({ type: RefreshDto })
  @UseGuards(RefreshTokenGuard)
  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  async refresh() {
    return new R({
      data: await this.authService.refreshTokens()
    })
  }
}
