import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length, NotContains } from 'class-validator'

export class LoginDto {
  @ApiProperty({ description: '用户名' })
  @Length(4, 16, { message: '用户名长度为 4 ~ 16 位' })
  @NotContains(' ', { message: '用户名不能包含空格' })
  @IsString({ message: '用户名必须为字符串' })
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string

  @ApiProperty({ description: '密码' })
  @Length(6, 16, { message: '密码长度为 6 ~ 16 位' })
  @NotContains(' ', { message: '密码不能包含空格' })
  @IsString({ message: '密码必须为字符串' })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string
}
