import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeSearch } from './employee-search/employee-search';
import { EmployeeList } from './employee-list/employee-list';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeSearch, EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  employees: Employee[] = [
    {
      profilePicture: 'https://i.pravatar.cc/150?img=1',
      username: 'john_doe',
      email: 'john@example.com',
      phone: '+1234567890',
      birthdate: '1990-05-15',
      role: 'admin',
    },
    {
      profilePicture: 'https://i.pravatar.cc/150?img=2',
      username: 'jane_smith',
      email: 'jane@example.com',
      phone: '+0987654321',
      birthdate: '1985-08-22',
      role: 'user',
    },
    {
      profilePicture: 'https://i.pravatar.cc/150?img=3',
      username: 'bob_mod',
      email: 'bob@example.com',
      phone: '+1122334455',
      birthdate: '1992-12-01',
      role: 'moderator',
    },
  ];

  filteredEmployees: Employee[] = this.employees;

  onSearch(searchTerm: string) {
    if (!searchTerm) {
      this.filteredEmployees = this.employees;
      return;
    }

    this.filteredEmployees = this.employees.filter(
      (emp) =>
        emp.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }
}
