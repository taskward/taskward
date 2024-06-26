import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class RefreshTokenGuard extends AuthGuard('refresh-token') {
  handleRequest<JwtPayload>(err: any, jwtPayload: JwtPayload) {
    if (err || !jwtPayload) {
      throw new UnauthorizedException('认证失败')
    }
    return jwtPayload
  }
}
