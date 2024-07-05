import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearch } from '@tanstack/react-router'
import type { Tokens } from '@taskward/axios'
import { AuthUtils } from '@taskward/utils'

import type { LoginDto, SignupDto } from './types'

export const useLoginMutation = () => {
  const router = useRouter()
  const search = useSearch({
    from: '/_public/login'
  })

  const rememberStore = useRememberStore()

  return useMutation({
    mutationFn: (loginDto: LoginDto) => httpClient.post<Tokens>('/auth/login', loginDto),
    onSuccess: async (data, loginDto) => {
      if (loginDto.remember) {
        rememberStore.setRemember(loginDto)
      } else {
        rememberStore.clearRemember()
      }
      const { accessToken, refreshToken } = data
      AuthUtils.setAccessToken(accessToken)
      AuthUtils.setRefreshToken(refreshToken)
      router.navigate({
        to: search ? search.redirect : '/',
        replace: true
      })
    }
  })
}

export const useSignupMutation = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: (signupDto: SignupDto) => httpClient.post<Tokens>('/auth/signup', signupDto),
    onSuccess: async (data) => {
      const { accessToken, refreshToken } = data
      AuthUtils.setAccessToken(accessToken)
      AuthUtils.setRefreshToken(refreshToken)
      router.navigate({
        to: '/',
        replace: true
      })
    }
  })
}
