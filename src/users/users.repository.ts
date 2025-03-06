import { Injectable } from '@nestjs/common';
import { IUser } from './IUser';

@Injectable()
export class UsersRepository {
  // This is a temporal mock database
  private users = [
    {
      userId: 1,
      email: 'V6aFq@example.com',
      username: 'john',
      password: 'changeme',
      isAdmin: true,
    },
    {
      userId: 2,
      email: 'cVY6o@example.com',
      username: 'maria',
      password: 'guess',
      isAdmin: false,
    },
    {
      userId: 3,
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
  async registerUser(user: Omit<IUser, 'userId'>) {
    const id = this.users.length + 1;
    this.users = [...this.users, { userId: id, ...user }];
    return { userId: id, ...user };
  }
}
