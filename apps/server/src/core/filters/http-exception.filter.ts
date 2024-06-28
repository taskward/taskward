import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common'
import { Catch, HttpException } from '@nestjs/common'
import type { Response } from 'express'

import { R } from '@/shared/class'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>()
    const status = exception.getStatus()
    const exceptionResponse = exception.getResponse()
    if (typeof exceptionResponse === 'string') {
      response.status(status).json(
        new R({
          msg: exceptionResponse
        })
      )
    } else {
      const { message } = exceptionResponse as Record<string, any>
      response.status(status).json(
        new R({
          msg: message
        })
      )
    }
  }
}
