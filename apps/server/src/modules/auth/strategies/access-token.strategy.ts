import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { ContextIdFactory, ModuleRef } from '@nestjs/core'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { ContextService } from '@/modules/shared/context/context.service'
import { JwtEnvConfig } from '@/shared/configs'
import type { CustomRequest, JwtPayload } from '@/shared/interfaces'

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'access-token') {
  constructor(
    @Inject(JwtEnvConfig.KEY) readonly jwtEnvConfig: ConfigType<typeof JwtEnvConfig>,
    private readonly moduleRef: ModuleRef
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtEnvConfig.accessTokenSecret,
      issuer: jwtEnvConfig.accessTokenIss,
      passReqToCallback: true
    })
  }

  async validate(req: CustomRequest, jwtPayload: JwtPayload) {
    // TODO: Check if the token is blacklisted
    if (!jwtPayload.jti) {
      return false
    }

    const contextId = ContextIdFactory.getByRequest(req)
    const contextService = await this.moduleRef.resolve(ContextService, contextId, {
      strict: false
    })
    contextService.set('jwtPayload', jwtPayload)

    return jwtPayload
  }
}
