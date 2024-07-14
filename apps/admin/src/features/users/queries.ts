import { queryOptions } from '@tanstack/react-query'

import { PROFILE_QK, USERS_QK } from './query-keys'

interface UserVo {
  id: number
  username: string
  nickName: string
  avatarUrl: string
  birthDate: string
}

export const profileQO = () =>
  queryOptions({
    queryKey: PROFILE_QK(),
    queryFn: ({ signal }) => httpClient.get<UserVo>('/users/profile', {}, { signal })
  })

export const usersQO = () =>
  queryOptions({
    queryKey: USERS_QK(),
    queryFn: ({ signal }) => httpClient.get<UserVo[]>('/users', {}, { signal })
  })
