import { QueryClient } from '@tanstack/react-query'

export const STALE = Object.freeze({
  MINUTES: {
    ONE: 1e3 * 60,
    TWO: 1e3 * 60 * 2,
    THREE: 1e3 * 60 * 3,
    FOUR: 1e3 * 60 * 4,
    FIVE: 1e3 * 60 * 5,
    TEN: 1e3 * 60 * 10
  },
  HOURS: {
    HALF: 1e3 * 60 * 30,
    ONE: 1e3 * 60 * 60,
    TWO: 1e3 * 60 * 60 * 2
  },
  INFINITY: Infinity
})

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 5,
      gcTime: STALE.MINUTES.FIVE,
      retry: 1
    }
  }
})
