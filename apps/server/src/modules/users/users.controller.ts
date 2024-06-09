import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'

import { Jwt } from '@/shared/decorators'

import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@ApiTags('用户')
@ApiBearerAuth('bearer')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '创建用户' })
  @Post()
  create(@Body() createUserDto: CreateUserDto, @Jwt('sub') createdBy: number) {
    return this.usersService.create(createUserDto, createdBy)
  }

  @ApiOperation({ summary: '用户列表' })
  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @ApiOperation({ summary: '用户详情 [id]' })
  @Get(':id(\\d+)')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }
}
