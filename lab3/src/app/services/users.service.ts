import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { USERS } from '../data/users.data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = USERS;

  findByUsername(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  validateCredentials(username: string, password: string): User | null {
    const user = this.findByUsername(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  register(username: string, email: string, password: string): User | null {
    if (this.findByUsername(username)) {
      return null; // Username taken
    }
    if (this.findByEmail(email)) {
      return null; // Email taken
    }

    // Create new user
    const newUser: User = {
      id: this.users.length + 1,
      username,
      email,
      password,
    };

    this.users.push(newUser);

    return newUser;
  }
}
