import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { O } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-todo-list',
  imports: [MatListModule, MatCheckboxModule, MatIconModule, MatButtonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  @Input() todos: { text: string; completed: boolean }[] = [];
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() toggleTodo = new EventEmitter<number>();

  onDelete(index: number) {
    this.deleteTodo.emit(index);
  }
  onToggle(index: number) {
    this.toggleTodo.emit(index);
  }
}
