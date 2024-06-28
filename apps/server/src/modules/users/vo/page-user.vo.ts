import { Type } from 'class-transformer'

import { Page } from '@/shared/class'

import { UserVo } from './user.vo'

export class PageUserVo extends Page {
  @Type(() => UserVo)
  records: UserVo[]
}
