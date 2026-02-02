import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoInput } from './todo-input/todo-input';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoInput, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  todos: { text: string; completed: boolean }[] = [];

  onAddTodo(todo: string) {
    this.todos.push({ text: todo, completed: false });
  }

  onDeleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  onToggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
