import { AuthUtils } from '@taskward/utils'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

import type { LoginDto } from '@/features/auth/types'

export type RememberStore = {
  loginDto: LoginDto
  setRemember: (loginDto: LoginDto) => void
  clearRemember: () => void
}

export const useRememberStore = create<RememberStore>()(
  subscribeWithSelector((set) => ({
    loginDto: JSON.parse(AuthUtils.getRememberedAccount() ?? '{}'),
    setRemember: (loginDto: LoginDto) => {
      set({ loginDto })
      AuthUtils.setRememberedAccount(
        JSON.stringify({
          username: loginDto.username,
          password: loginDto.password
        })
      )
    },
    clearRemember: () => {
      set({ loginDto: {} as LoginDto })
      AuthUtils.clearRememberedAccount()
    }
  }))
)

useRememberStore.subscribe(
  (state: RememberStore) => state.loginDto,
  (loginDto: LoginDto) => {
    useRememberStore.getState().setRemember(loginDto)
  },
  {
    fireImmediately: true
  }
)
