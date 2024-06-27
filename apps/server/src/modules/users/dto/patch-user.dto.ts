import { ApiPropertyOptional, OmitType } from '@nestjs/swagger'
import { IsOptional, IsString, Length, MaxLength, NotContains } from 'class-validator'

import { UpdateUserDto } from './update-user.dto'

export class PatchUserDto extends OmitType(UpdateUserDto, ['username', 'nickName'] as const) {
  @ApiPropertyOptional({ description: '用户名' })
  @Length(4, 16, { message: '用户名长度为 4 ~ 16 位' })
  @NotContains(' ', { message: '用户名不能包含空格' })
  @IsString({ message: '用户名必须为字符串' })
  @IsOptional()
  username?: string

  @ApiPropertyOptional({ description: '昵称' })
  @MaxLength(16, { message: '昵称长度不得超过 16 位' })
  @NotContains(' ', { message: '昵称不能包含空格' })
  @IsString({ message: '昵称必须为字符串' })
  @IsOptional()
  nickName?: string
}
