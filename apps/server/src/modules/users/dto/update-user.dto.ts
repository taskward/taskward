import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Length,
  MaxLength,
  NotContains
} from 'class-validator'

export class UpdateUserDto {
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

  @ApiPropertyOptional({ description: '手机号' })
  @MaxLength(25, { message: '手机号长度不得超过 25 位' })
  @IsPhoneNumber(undefined, { message: '手机号格式不正确' })
  @IsOptional()
  phoneNumber?: string

  @ApiPropertyOptional({ description: '邮箱' })
  @MaxLength(50, { message: '邮箱长度不得超过 50 位' })
  @IsEmail(undefined, { message: '邮箱格式不正确' })
  @IsOptional()
  email?: string

  @ApiPropertyOptional({ description: '名' })
  @MaxLength(10, { message: '名长度不得超过 10 位' })
  @IsString({ message: '名必须为字符串' })
  @IsOptional()
  firstName?: string

  @ApiPropertyOptional({ description: '中间名' })
  @MaxLength(10, { message: '中间名长度不得超过 10 位' })
  @IsString({ message: '中间名必须为字符串' })
  @IsOptional()
  middleName?: string

  @ApiPropertyOptional({ description: '姓' })
  @MaxLength(10, { message: '姓长度不得超过 10 位' })
  @IsString({ message: '姓必须为字符串' })
  @IsOptional()
  lastName?: string

  @ApiPropertyOptional({ description: '头像' })
  @MaxLength(100, { message: '头像长度不得超过 100 位' })
  @IsUrl(undefined, { message: '头像格式不正确' })
  @IsOptional()
  avatarUrl?: string

  @ApiPropertyOptional({ description: '性别' })
  @MaxLength(10, { message: '性别长度不得超过 10 位' })
  @IsString({ message: '性别必须为字符串' })
  @IsOptional()
  gender?: string

  @ApiPropertyOptional({ description: '国家' })
  @MaxLength(25, { message: '国家长度不得超过 25 位' })
  @IsString({ message: '国家必须为字符串' })
  @IsOptional()
  country?: string

  @ApiPropertyOptional({ description: '省份' })
  @MaxLength(25, { message: '省份长度不得超过 25 位' })
  @IsString({ message: '省份必须为字符串' })
  @IsOptional()
  province?: string

  @ApiPropertyOptional({ description: '城市' })
  @MaxLength(25, { message: '城市长度不得超过 25 位' })
  @IsString({ message: '城市必须为字符串' })
  @IsOptional()
  city?: string

  @ApiPropertyOptional({ description: '地址' })
  @MaxLength(100, { message: '地址长度不得超过 100 位' })
  @IsString({ message: '地址必须为字符串' })
  @IsOptional()
  address?: string

  @ApiPropertyOptional({ description: '个人简介' })
  @MaxLength(500, { message: '个人简介长度不得超过 500 位' })
  @IsString({ message: '个人简介必须为字符串' })
  @IsOptional()
  biography?: string

  @ApiPropertyOptional({ description: '个人网站' })
  @MaxLength(50, { message: '个人网站长度不得超过 50 位' })
  @IsUrl(undefined, { message: '个人网站格式不正确' })
  @IsOptional()
  website?: string

  @ApiPropertyOptional({ description: '个人主页' })
  @MaxLength(50, { message: '个人主页长度不得超过 50 位' })
  @IsUrl(undefined, { message: '个人主页格式不正确' })
  @IsOptional()
  profile?: string

  @ApiPropertyOptional({ description: '出生日期' })
  @IsDate({ message: '出生日期格式不正确' })
  @IsOptional()
  birthDate?: Date

  @ApiPropertyOptional({ description: '是否启用' })
  @IsBoolean({ message: '是否启用必须为布尔值' })
  @IsOptional()
  enabled?: boolean

  @ApiPropertyOptional({ description: '是否通过验证' })
  @IsBoolean({ message: '是否通过验证必须为布尔值' })
  @IsOptional()
  authFlag?: boolean
}
