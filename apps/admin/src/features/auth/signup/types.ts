import type { LoginDto } from '../login'

export interface SignupDto extends LoginDto {
  nickName: string
}
