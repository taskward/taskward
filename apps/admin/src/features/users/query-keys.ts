export const USERS_QK = 'users'

export const PROFILE_QK = `${USERS_QK}:profile`

export const profileQK = () => [PROFILE_QK] as const

export const usersQK = () => [USERS_QK] as const

export const userQK = (id: number) => [USERS_QK, id] as const
