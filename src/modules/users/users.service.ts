import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { IUser } from './interfaces/user.interface';

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

  // POST /users/register
  registerUser(user: Omit<IUser, 'userId'>): Promise<IUser> {
    return this.usersRepository.registerUser(user);
  }
}
