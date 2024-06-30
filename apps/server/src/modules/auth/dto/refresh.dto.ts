import { ApiProperty } from '@nestjs/swagger'

export class RefreshDto {
  @ApiProperty({ description: '刷新令牌' })
  token: string
}
