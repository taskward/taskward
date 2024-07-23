import { HttpClient } from '@bit-ocean/axios'

export const httpClient = new HttpClient(
  { enableRefreshToken: true },
  { baseURL: import.meta.env.VITE_BASE_API_PREFIX }
)
