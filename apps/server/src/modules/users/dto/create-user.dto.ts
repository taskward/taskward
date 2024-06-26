import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length, Matches, MaxLength, NotContains } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @Length(4, 16, { message: '用户名长度为 4 ~ 16 位' })
  @NotContains(' ', { message: '用户名不能包含空格' })
  @IsString({ message: '用户名必须为字符串' })
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string

  @ApiPropertyOptional({ description: '昵称' })
  @MaxLength(16, { message: '昵称长度不得超过 16 位' })
  @NotContains(' ', { message: '昵称不能包含空格' })
  @IsString({ message: '昵称必须为字符串' })
  @IsNotEmpty({ message: '昵称不能为空' })
  nickName: string

  @ApiProperty({ description: '密码' })
  @Matches(/[0-9]/, { message: '密码至少包含一位数字' })
  @Matches(/[a-zA-Z]/, { message: '密码至少包含一位字母' })
  @Length(6, 16, { message: '密码长度为 6 ~ 16 位' })
  @NotContains(' ', { message: '密码不能包含空格' })
  @IsString({ message: '密码必须为字符串' })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string
}
