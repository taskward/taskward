import { SetMetadata } from '@nestjs/common'

import { SKIP_AUTH } from '@/shared/constants'

export const SkipAuth = () => SetMetadata(SKIP_AUTH, true)
