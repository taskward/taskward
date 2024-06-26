import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { JwtEnvConfig } from '@/shared/configs'
import type { CustomRequest, JwtPayload } from '@/shared/interfaces'

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'refresh-token') {
  constructor(@Inject(JwtEnvConfig.KEY) readonly jwtEnvConfig: ConfigType<typeof JwtEnvConfig>) {
    super({
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
      ignoreExpiration: false,
      secretOrKey: jwtEnvConfig.refreshTokenSecret,
      passReqToCallback: true
    })
  }

  async validate(req: CustomRequest, jwtPayload: JwtPayload) {
    if (!jwtPayload.jti) {
      return false
    }

    req.jwtPayload = jwtPayload

    return jwtPayload
  }
}
