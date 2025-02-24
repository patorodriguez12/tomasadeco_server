import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
    {
      userId: 3,
      username: 'lucy',
      password: 'secret',
    },
  ];

  async getUsers() {
    return this.users;
  }
}
