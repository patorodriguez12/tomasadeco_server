import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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

  // GET /users/:id
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  // POST /users/register
  @Post('register')
  registerUser(@Body() UserDto: UserDto) {
    return this.usersService.registerUser(UserDto);
  }
}
