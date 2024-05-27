import { router } from 'expo-router'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

interface State {
  accessToken?: string
}

interface Actions {
  setAccessToken: (accessToken: string) => void
  isLogin: () => boolean
}

const initialState: State = {}

export const useAuthStore = create<State & Actions>()(
  subscribeWithSelector((set, get) => ({
    ...initialState,

    setAccessToken: (accessToken) => set({ accessToken }),

    isLogin: () => !!get().accessToken
  }))
)

useAuthStore.subscribe(
  (state) => state.accessToken,
  (accessToken) => {
    if (!accessToken) {
      router.replace('/login')
    }
  },
  {
    fireImmediately: true
  }
)
