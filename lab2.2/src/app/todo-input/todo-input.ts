import { Component, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.scss',
})
export class TodoInput {
  todoText = '';

  @Output() addTodo = new EventEmitter<string>();

  onAdd() {
    if (this.todoText.trim()) {
      this.addTodo.emit(this.todoText.trim());
      this.todoText = '';
    }
  }
}
