import { createParamDecorator, type ExecutionContext } from '@nestjs/common'

import type { CustomRequest, JwtPayload } from '@/shared/interfaces'

/**
 * Jwt decorator for extracting jwt payload from request.
 *
 * @example Get all jwt payload
 * ```ts
 * findAll(@Jwt() jwtPayload: JwtPayload) {}
 * ```
 *
 * @example Get specific jwt payload
 * ```ts
 * findOne(@Jwt('sub') sub: string) {}
 * ```
 */
export const Jwt = createParamDecorator<keyof JwtPayload>((key, ctx: ExecutionContext) => {
  const { jwtPayload } = ctx.switchToHttp().getRequest<CustomRequest>()
  return key ? jwtPayload?.[key] : jwtPayload
})
