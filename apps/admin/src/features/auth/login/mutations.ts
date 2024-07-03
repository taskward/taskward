import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearch } from '@tanstack/react-router'
import type { Tokens } from '@taskward/axios'
import { AuthUtils } from '@taskward/utils'

import type { LoginDto } from './types'

export const useLoginMutation = () => {
  const router = useRouter()
  const search = useSearch({
    from: '/_public/login'
  })

  return useMutation({
    mutationFn: (loginDto: LoginDto) => httpClient.post<Tokens>('/auth/login', loginDto),
    onSuccess: async (data) => {
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
