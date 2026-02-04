import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;

  constructor(private usersService: UsersService) {}

  login(email: string, password: string): boolean {
    const user = this.usersService.validateCredentials(email, password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  register(name: string, username: string, email: string, password: string): boolean {
    const newUser = this.usersService.addUser(name, username, email, password);
    if (newUser) {
      this.currentUser = newUser; // Auto-login after registration
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
