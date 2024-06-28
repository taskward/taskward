import { Transform } from 'class-transformer'

export function ToId(): PropertyDecorator {
  return Transform(
    ({ value }) => {
      const number = value ? +value : 0
      return Number.isInteger(number) && number > 0 ? number : undefined
    },
    { toClassOnly: true }
  )
}
