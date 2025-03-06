import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

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
  registerUser(@Body() UserDto: UserDto) {
    return this.usersService.registerUser(UserDto);
  }
}
