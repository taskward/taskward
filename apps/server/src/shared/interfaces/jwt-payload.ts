export interface JwtPayload {
  sub: number
  jti: string
  iss?: string
  iat?: string
  exp?: string
}
