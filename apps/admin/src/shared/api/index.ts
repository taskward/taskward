import { HttpClient } from '@taskward/axios'

export const httpClient = new HttpClient(
  {
    enableRefreshToken: true
  },
  {
    baseURL: import.meta.env.VITE_BASE_API_PREFIX
  }
)
