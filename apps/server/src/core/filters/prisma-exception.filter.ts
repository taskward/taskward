import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common'
import { Catch, HttpStatus } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import type { Response } from 'express'

import { R } from '@/shared/class'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>()

    const { code } = exception

    switch (code) {
      case 'P2002':
        // 处理 Prisma Unique 字段冲突异常
        response.status(HttpStatus.CONFLICT).json(new R({ msg: '字段冲突异常' }))
        break
      case 'P2003':
        // 处理 Prisma 操作失败异常
        response.status(HttpStatus.BAD_REQUEST).json(new R({ msg: '操作失败异常' }))
        break
      case 'P2021':
        // 处理 Prisma 表不存在
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json('Internal server error')
        break
      case 'P2025':
        // 处理 Prisma 资源未找到异常
        response.status(HttpStatus.NOT_FOUND).json(new R({ msg: '资源未找到异常' }))
        break
      default:
        // eslint-disable-next-line no-console
        console.error(exception)
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json('Internal server error')
        break
    }
  }
}
