import { ApiPropertyOptional } from '@nestjs/swagger'

export class R<T = any> {
  @ApiPropertyOptional({ description: '提示信息', example: '请求成功' })
  msg?: string

  @ApiPropertyOptional({ description: '响应数据', type: () => Object })
  data?: T

  constructor(r?: R<T>) {
    Object.assign(this, r)
  }
}
