import { Transform } from 'class-transformer'
import dayjs from 'dayjs'

interface ToDateStringOptions {
  formatter?: string
}

export function ToDateString(options?: ToDateStringOptions): PropertyDecorator {
  const { formatter = 'YYYY-MM-DD' } = options ?? {}
  return Transform(
    ({ value }) => (dayjs(value).isValid() ? dayjs(value).format(formatter) : null),
    { toClassOnly: true }
  )
}
