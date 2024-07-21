export const USERS_QK = 'users'

export const PROFILE_QK = `${USERS_QK}:profile`

export const profileQK = () => [PROFILE_QK]

export const usersQK = () => [USERS_QK]

export const userQK = (id: number) => [USERS_QK, id]
