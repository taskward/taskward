import type { Dayjs } from 'dayjs'

export interface LoginDto {
  username: string
  password: string
}

export interface SignupDto extends LoginDto {
  nickName: string
  birthDate: string
  email: string
}

export interface LoginFormValues extends LoginDto {
  remember: boolean
}

export interface SignupFormValues extends Omit<SignupDto, 'birthDate'> {
  birthDate: Dayjs
}
