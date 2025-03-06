import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  // These methods are used in the users controller and are called by the users repository

  // GET /users
  getUsers() {
    return this.usersRepository.getUsers();
  }

  // GET /users?name=...
  getUsersByName(name: string) {
    return this.usersRepository.getUsersByName(name);
  }

  // GET /users/:id
  getUserById(id: number) {
    return this.usersRepository.getUserById(id);
  }

  // POST /users/register
  async registerUser(userDto: UserDto) {
    const { email, password, username, isAdmin } = userDto;

    const newUser = await this.usersRepository.registerUser({
      email,
      password,
      username,
      isAdmin: isAdmin ?? false,
    });

    return newUser;
  }

  // PUT /users/:id
  updateUser(id: number, userDto: UserDto) {
    return this.usersRepository.updateUser(id, userDto);
  }

  // DELETE /users/:id
  deleteUser(id: number) {
    return this.usersRepository.deleteUser(id);
  }
}
