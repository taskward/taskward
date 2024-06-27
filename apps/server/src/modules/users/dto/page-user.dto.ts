import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsOptional } from 'class-validator'

import { PageDto } from '@/shared/class'
import { ToId } from '@/shared/decorators'

export class PageUserDto extends PageDto {
  @ApiPropertyOptional({ description: 'ID' })
  @IsNumber({}, { message: 'ID 必须为数字' })
  @IsOptional()
  @ToId()
  id?: number

  @ApiPropertyOptional({ description: '是否启用' })
  @IsBoolean({ message: '是否启用必须为布尔值' })
  @IsOptional()
  enabled?: boolean
}
