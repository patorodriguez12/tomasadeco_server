import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private readonly users = [
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

  async getUsers() {
    return this.users;
  }
}
