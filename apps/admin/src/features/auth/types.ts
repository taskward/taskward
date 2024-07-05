import type { Dayjs } from 'dayjs'

export interface LoginDto {
  username: string
  password: string
  remember: boolean
}

export interface SignupDto extends Omit<LoginDto, 'remember'> {
  nickName: string
  birthDate: string
  email: string
}

export interface SignupFormValues extends Omit<SignupDto, 'birthDate'> {
  birthDate: Dayjs
}
