import { Transform } from 'class-transformer'

export function ToISOString(): PropertyDecorator {
  return Transform(
    ({ value }) => {
      try {
        return new Date(value).toISOString()
      } catch {
        return undefined
      }
    },
    { toClassOnly: true }
  )
}
