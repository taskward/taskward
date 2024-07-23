import { MutationCache, QueryClient } from '@tanstack/react-query'

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
      staleTime: STALE.MINUTES.TWO,
      gcTime: STALE.MINUTES.FIVE,
      retry: 1
    }
  },
  /**
   * Automatically invalidate queries after a mutation.
   * @see https://tkdodo.eu/blog/automatic-query-invalidation-after-mutations#tie-it-to-the-mutationkey
   */
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      queryClient.invalidateQueries({
        queryKey: mutation.options.mutationKey
      })
    }
  })
})
