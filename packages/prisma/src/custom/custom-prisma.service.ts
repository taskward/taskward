import { Inject, Injectable } from '@nestjs/common'

import { CUSTOM_PRISMA_CLIENT } from './constants'
import { PrismaClientLike } from './types'

@Injectable()
export class CustomPrismaService<Client extends PrismaClientLike> {
  constructor(
    @Inject(CUSTOM_PRISMA_CLIENT)
    public client: Client
  ) {}
}
