import type { Page } from '@taskward/axios'

import { profileQK, userQK, usersQK } from './query-keys'
import type { UserVo } from './types'

export const profileQO = () =>
  queryOptions({
    queryKey: profileQK(),
    queryFn: ({ signal }) => httpClient.get<UserVo>('/users/profile', {}, { signal })
  })

export const usersQO = () =>
  queryOptions({
    queryKey: usersQK(),
    queryFn: ({ signal }) => httpClient.get<Page<UserVo>>('/users', {}, { signal })
  })

export const userQO = (id: number) =>
  queryOptions({
    queryKey: userQK(id),
    queryFn: ({ signal }) => httpClient.get<UserVo>(`/users/${id}`, {}, { signal })
  })
