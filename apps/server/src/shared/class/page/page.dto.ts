import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsEnum, IsISO8601, IsOptional, IsPositive, IsString } from 'class-validator'

import { ToISOString, Trim } from '@/shared/decorators/tranformer'
import { SortColumnKey, SortOrder } from '@/shared/enums'

export class PageDto {
  @ApiProperty({ description: '页码', example: 1, default: 1 })
  @IsPositive({ message: '页码必须大于 0' })
  page: number = 1

  @ApiProperty({ description: '每页条数', example: 10, default: 10 })
  @IsPositive({ message: '每页条数必须大于 0' })
  pageSize: number = 10

  @ApiPropertyOptional({ description: '搜索关键字' })
  @IsString({ message: '搜索关键字必须是一个字符串' })
  @IsOptional()
  @Trim()
  keywords?: string

  @ApiPropertyOptional({ description: '开始时间' })
  @IsISO8601(
    { strict: true, strictSeparator: true },
    { message: '开始时间必须是一个有效的日期字符串' }
  )
  @IsOptional()
  @ToISOString()
  startTime?: string

  @ApiPropertyOptional({ description: '结束时间' })
  @IsISO8601(
    { strict: true, strictSeparator: true },
    { message: '结束时间必须是一个有效的日期字符串' }
  )
  @IsOptional()
  @ToISOString()
  endTime?: string

  @ApiPropertyOptional({
    description: '排序列名',
    example: `${SortColumnKey.SORT},${SortColumnKey.CREATED_AT}`
  })
  @IsEnum(SortColumnKey, { each: true, message: '排序列名不支持' })
  @IsOptional()
  @Transform(({ value }) => value.split(','))
  sortColumnKeys: SortColumnKey[]

  @ApiPropertyOptional({
    description: '排序方式',
    example: `${SortOrder.ASC},${SortOrder.DESC}`
  })
  @IsEnum(SortOrder, { each: true, message: '排序方法不支持' })
  @IsOptional()
  @Transform(({ value }) => value.split(','))
  sortOrders: SortOrder[]

  /**
   * Prisma 排序对象数组
   */
  orderBy?: Record<SortColumnKey, SortOrder>[]

  /**
   * MongoDB 排序数组
   */
  sort?: [string, SortOrder][]

  constructor() {
    if (this.sortColumnKeys && this.sortOrders) {
      this.sortColumnKeys = this.sortColumnKeys.filter(Boolean)
      this.sortOrders = this.sortOrders.filter(Boolean)
      // 将排序字段和排序方式转化为 Prisma 的排序对象数组
      this.orderBy = this.sortColumnKeys.map((field: SortColumnKey, index) => ({
        [field]: this.sortOrders[index]
      })) as Record<SortColumnKey, SortOrder>[]
      // 将排序字段和排序方式转化为 MongoDB 的排序数组
      this.sort = this.sortColumnKeys.map((field: SortColumnKey, index) => [
        field,
        this.sortOrders[index]
      ])
    }
  }
}
