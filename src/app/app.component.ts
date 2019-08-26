import { Component, OnInit } from "@angular/core";
import { ToDo } from "./ToDos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public todos: ToDo[];
  public todoId: number;
  public todoTitle: string;
  public filter: string;

  ngOnInit(): void {
    this.todoId = 4;
    this.todoTitle = "";
    this.filter = "all";
    this.todos = [
      {
        id: 1,
        title: "First thing...",
        completed: false,
        edited: false
      },
      {
        id: 2,
        title: "Second thing...",
        completed: false,
        edited: false
      },
      {
        id: 3,
        title: "Third thing...",
        completed: false,
        edited: false
      }
    ];
  }
  AddTodo() {
    if (this.todoTitle == null || this.todoTitle === "") {
      alert("Please Add a ToDo..");
    } else {
      this.todos.push({
        id: this.todoId,
        title: this.todoTitle,
        completed: false,
        edited: false
      });
    }
    this.todoId++;
    this.todoTitle = "";
  }

  RemoveTodo(id) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i]["id"] == id) {
        this.todos.splice(i, 1);
        return this.todos;
      }
    }
  }

  Remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  todosFilter(): ToDo[] {
    if (this.filter === "all") {
      return this.todos;
    } else if (this.filter === "active") {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === "Done") {
      return this.todos.filter(todo => todo.completed);
    }
  }

  ClearComplete(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}
