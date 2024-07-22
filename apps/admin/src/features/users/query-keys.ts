export const USERS_QK = 'users'

export const PROFILE_QK = `${USERS_QK}:profile`

export const profileQK = () => <const>[PROFILE_QK]

export const usersQK = () => <const>[USERS_QK]

export const userQK = (id: number) => <const>[USERS_QK, id]
