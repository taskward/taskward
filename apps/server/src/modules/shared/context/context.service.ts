import { Inject, Injectable, Scope } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'

import type { CustomRequest, JwtPayload } from '@/shared/interfaces'

@Injectable({ scope: Scope.REQUEST })
export class ContextService {
  private readonly contextMap = new Map<string, any>()

  private readonly JWT_PAYLOAD = 'jwtPayload'

  constructor(@Inject(REQUEST) private readonly request: CustomRequest) {}

  get<T>(key: string): T | undefined {
    return this.contextMap.get(key)
  }

  set<T>(key: string, value: T): void {
    this.contextMap.set(key, value)
  }

  getRequest(): CustomRequest {
    return this.request
  }

  getJwtPayload(): JwtPayload
  getJwtPayload<K extends keyof JwtPayload>(key: K): JwtPayload[K]
  getJwtPayload<K extends keyof JwtPayload>(key?: K) {
    const jwtPayload = this.get(this.JWT_PAYLOAD) as JwtPayload | undefined
    if (!jwtPayload) {
      return undefined
    }
    if (key !== undefined) {
      return jwtPayload?.[key]
    }
    return jwtPayload
  }

  setJwtPayload(jwtPayload: JwtPayload) {
    this.set(this.JWT_PAYLOAD, jwtPayload)
  }

  getUserId(): number {
    return this.getJwtPayload('sub')
  }
}
