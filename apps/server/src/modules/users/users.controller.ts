import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'

import { R } from '@/shared/class'

import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@ApiTags('用户')
@ApiBearerAuth('bearer')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '创建用户' })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return new R({
      data: await this.usersService.create(createUserDto)
    })
  }

  @ApiOperation({ summary: '用户列表' })
  @Get()
  findMany() {
    return this.usersService.findMany()
  }

  @ApiOperation({ summary: '个人信息' })
  @Get('profile')
  async findCurrent() {
    return new R({
      data: await this.usersService.findCurrent()
    })
  }

  @ApiOperation({ summary: '用户详情 [id]' })
  @Get(':id(\\d+)')
  async findOne(@Param('id') id: number) {
    return new R({
      data: await this.usersService.findOne(id)
    })
  }

  @ApiOperation({ summary: '更新用户' })
  @Put(':id(\\d+)')
  update(@Param('id') id: number) {
    return this.usersService.update(id)
  }

  @ApiOperation({ summary: '删除用户' })
  @Delete(':id(\\d+)')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id)
  }
}
