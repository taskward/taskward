import type { ExecutionContext } from '@nestjs/common'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'

import { IS_PUBLIC } from '@/shared/constants'

@Injectable()
export class AccessTokenGuard extends AuthGuard('access-token') {
  constructor(private readonly reflector: Reflector) {
    super()
  }

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC, [
      context.getHandler(),
      context.getClass()
    ])

    if (isPublic) {
      return true
    }

    if (!(await super.canActivate(context))) {
      return false
    }

    return true
  }

  handleRequest(err: any, jwtPayload: any) {
    if (err || !jwtPayload) {
      throw new UnauthorizedException('认证失败')
    }

    return jwtPayload
  }
}
