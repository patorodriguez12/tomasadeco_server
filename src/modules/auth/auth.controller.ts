import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Post('signin')
  signIn(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    const user = this.usersRepository.getUserByEmail(email);
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Email or password are incorrect');
    }

    const { password: _, ...result } = user;
    return result;
  }
}
