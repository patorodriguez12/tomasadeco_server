import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersRepository } from '../users/users.repository';

@Module({
  controllers: [AuthController],
  providers: [UsersRepository],
})
export class AuthModule {}
