import { SetMetadata } from '@nestjs/common'

import { IS_PUBLIC } from '@/shared/constants'

export const IsPublic = () => SetMetadata(IS_PUBLIC, true)
