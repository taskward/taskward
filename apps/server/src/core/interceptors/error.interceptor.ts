import { stdout } from 'node:process'

import type { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import type { Observable } from 'rxjs'
import { catchError, throwError } from 'rxjs'

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        const { msg, error, statusCode } = err?.response ?? {}
        stdout.write(`调用失败：${statusCode} ${error}\n`)
        stdout.write(`错误信息：${msg}\n`)
        return throwError(() => err)
      })
    )
  }
}
