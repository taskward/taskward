import type { Request } from 'express'

import type { JwtPayload } from './jwt-payload'

export interface CustomRequest extends Request {
  jwtPayload?: JwtPayload
}
