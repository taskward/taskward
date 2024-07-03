import { useMutation } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import type { Tokens } from '@taskward/axios'
import { AuthUtils } from '@taskward/utils'

import type { SignupDto } from './types'

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
