import { HttpClient } from '@taskward/axios'

export const httpClient = new HttpClient({
  baseAPIPrefix: import.meta.env.VITE_ADMIN_BASE_API_PREFIX,
  enableRefreshToken: true
})
