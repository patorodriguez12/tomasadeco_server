import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersRepository {
  // This is a temporal mock database
  private users = [
    {
      id: 1,
      email: 'john@example.com',
      username: 'john',
      password: 'pass123',
      isAdmin: false,
    },
    {
      id: 2,
      email: 'maria@example.com',
      username: 'maria',
      password: 'pass123',
      isAdmin: false,
    },
    {
      id: 3,
      email: 'lucy@example.com',
      username: 'lucy',
      password: 'pass123',
      isAdmin: false,
    },
    {
      id: 4,
      email: 'paul@example.com',
      username: 'paul',
      password: 'pass123',
      isAdmin: false,
    },
    {
      id: 5,
      email: 'lisa@example.com',
      username: 'lisa',
      password: 'pass123',
      isAdmin: false,
    },
    {
      id: 6,
      email: 'mark@example.com',
      username: 'mark',
      password: 'pass123',
      isAdmin: false,
    },
    {
      id: 7,
      email: 'susan@example.com',
      username: 'susan',
      password: 'pass123',
      isAdmin: false,
    },
  ];

  // These methods are used in the users service

  // GET /users
  getUsers(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedUsers = this.users.slice(startIndex, endIndex);
    return {
      totalUsers: this.users.length,
      page,
      limit,
      totalPages: Math.ceil(this.users.length / limit),
      users: paginatedUsers.map(({ password, ...user }) => user),
    };
  }

  // GET /users?name=...
  getUsersByName(name: string) {
    return this.users
      .filter((user) => user.username === name)
      .map(({ password, ...user }) => user);
  }

  // GET /users/:id
  getUserById(id: number) {
    if (!this.users.find((user) => user.id === id)) {
      return `User with id ${id} not found`;
    }

    return this.users
      .filter((user) => user.id === id)
      .map(({ password, ...user }) => user);
  }

  // POST /users/register
  registerUser(user: Omit<IUser, 'id'>) {
    const id = this.users.length + 1;
    const newUser = { id, ...user };
    this.users.push(newUser);
    return newUser;
  }

  // PUT /users/:id
  updateUser(id: number, user: Omit<IUser, 'id'>) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      return `User with id ${id} not found`;
    }

    this.users[index] = { ...this.users[index], ...user };
    return this.users[index];
  }

  // DELETE /users/:id
  deleteUser(id: number) {
    if (!this.users.find((user) => user.id === id)) {
      return `User with id ${id} not found`;
    }

    this.users = this.users.filter((user) => user.id !== id);
    return `User with id ${id} deleted`;
  }
}
