import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersRepository {
  // This is a temporal mock database
  private users = [
    {
      id: 1,
      email: 'V6aFq@example.com',
      username: 'john',
      password: 'changeme',
      isAdmin: true,
    },
    {
      id: 2,
      email: 'cVY6o@example.com',
      username: 'maria',
      password: 'guess',
      isAdmin: false,
    },
    {
      id: 3,
      email: 'cVY6o@example.com',
      username: 'lucy',
      password: 'secret',
      isAdmin: false,
    },
  ];

  // These methods are used in the users service

  // GET /users
  async getUsers() {
    return this.users;
  }

  // GET /users?name=...
  async getUsersByName(name: string) {
    return this.users.filter((user) => user.username === name);
  }

  // POST /users/register
  async registerUser(user: Omit<IUser, 'id'>) {
    const id = this.users.length + 1;
    const newUser = { id, ...user };
    this.users.push(newUser);
    return newUser;
  }
}
