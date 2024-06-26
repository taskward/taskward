import { Inject, Injectable, Scope } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'

import type { CustomRequest, JwtPayload } from '@/shared/interfaces'

@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {
  private readonly contextMap = new Map<string, any>()

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
    if (key !== undefined) {
      return this.request.jwtPayload?.[key]
    }
    return this.request.jwtPayload
  }

  getUserId(): number {
    return this.getJwtPayload('sub')
  }
}
