import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { JwtEnvConfig } from '@/shared/configs'
import type { CustomRequest, JwtPayload } from '@/shared/interfaces'

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'access-token') {
  constructor(@Inject(JwtEnvConfig.KEY) readonly jwtEnvConfig: ConfigType<typeof JwtEnvConfig>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtEnvConfig.accessTokenSecret,
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
