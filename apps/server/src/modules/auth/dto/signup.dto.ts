import { PickType } from '@nestjs/swagger'

import { CreateUserDto } from '@/modules/users/dto'

export class SignupDto extends PickType(CreateUserDto, [
  'username',
  'password',
  'nickName',
  'birthDate'
]) {}
