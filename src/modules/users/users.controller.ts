import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './IUser';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users
  @Get()
  getUsers(@Query('name') name?: string) {
    if (name) {
      return this.usersService.getUsersByName(name);
    }

    return this.usersService.getUsers();
  }

  // POST /users/register
  @Post('register')
  registerUser(@Body() user: IUser) {
    return this.usersService.registerUser(user);
  }
}
