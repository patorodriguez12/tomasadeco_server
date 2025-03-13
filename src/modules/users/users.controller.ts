import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users
  @Get()
  @UseGuards(AuthGuard)
  getUsers(
    @Query('name') name?: string,
    @Query('email') email?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    if (name) {
      return this.usersService.getUsersByName(name);
    }

    if (email) {
      return this.usersService.getUserByEmail(email);
    }

    return this.usersService.getUsers(page, limit);
  }

  // GET /users/:id
  @Get(':id')
  @UseGuards(AuthGuard)
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  // POST /users/register
  @Post('register')
  registerUser(@Body() userDto: UserDto) {
    return this.usersService.registerUser(userDto);
  }

  // PUT /users/:id
  @Put(':id')
  @UseGuards(AuthGuard)
  updateUser(@Param('id') id: string, @Body() UserDto: UserDto) {
    return this.usersService.updateUser(Number(id), UserDto);
  }

  // DELETE /users/:id
  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}
