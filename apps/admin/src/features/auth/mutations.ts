import type { Tokens } from '@bit-ocean/axios'

import type { LoginDto, LoginFormValues, SignupDto } from './types'

export const useLoginMutation = () => {
  const router = useRouter()
  const search = useSearch({
    from: '/_public/login'
  })

  return useMutation({
    mutationFn: (loginDto: LoginDto) => httpClient.post<Tokens>('/auth/login', loginDto),
    onSuccess: async (data, variables: LoginFormValues) => {
      const { accessToken, refreshToken } = data
      AuthUtils.setAccessToken(accessToken)
      AuthUtils.setRefreshToken(refreshToken)
      router.navigate({
        to: search ? search.redirect : '/',
        replace: true
      })

      // Process remember account
      const { remember, ...loginDto } = variables
      if (remember) {
        AuthUtils.setRememberedAccount(JSON.stringify(loginDto))
      } else {
        AuthUtils.clearRememberedAccount()
      }
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
