import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'

import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@ApiTags('用户')
@ApiBearerAuth('bearer')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '创建用户' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @ApiOperation({ summary: '用户列表' })
  @Get()
  findMany() {
    return this.usersService.findMany()
  }

  @ApiOperation({ summary: '用户详情 [id]' })
  @Get(':id(\\d+)')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }
}
