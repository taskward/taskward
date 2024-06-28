import { forwardRef, Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

// eslint-disable-next-line import/no-cycle
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategies'

@Module({
  imports: [PassportModule, forwardRef(() => UsersModule)],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
  exports: [AuthService]
})
export class AuthModule {}
