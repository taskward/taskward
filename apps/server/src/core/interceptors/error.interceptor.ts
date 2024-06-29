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
        const { msg = '', error = '', statusCode = '' } = err?.response ?? {}
        if (statusCode || error) {
          stdout.write(`Call failed: ${statusCode} ${error}\n`)
        }
        if (msg) {
          stdout.write(`Error Message: ${msg}\n`)
        }
        return throwError(() => err)
      })
    )
  }
}
