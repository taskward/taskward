import { queryOptions } from '@tanstack/react-query'

import { PROFILE_QK, USERS_QK } from './query-keys'

interface UserVo {
  id: number
  username: string
  nickName: string
  avatarUrl: string
}

export const profileQO = queryOptions({
  queryKey: PROFILE_QK(),
  queryFn: () => httpClient.get<UserVo>('/base-api/users/profile')
})

export const usersQO = queryOptions({
  queryKey: USERS_QK(),
  queryFn: () => httpClient.get<UserVo[]>('/base-api/users')
})