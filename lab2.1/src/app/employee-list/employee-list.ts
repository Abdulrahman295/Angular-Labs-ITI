import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeList {
  @Input() employees: Employee[] = [];

  getRoleColor(role: string): string {
    switch (role) {
      case 'admin':
        return 'red';
      case 'user':
        return 'green';
      case 'moderator':
        return 'orange';
      default:
        return 'gray';
    }
  }
}
