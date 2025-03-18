import { QueryResult } from "pg";

declare global {
  interface TodoItem {
    id: number;
    status: number;
    title: string;
    description: string;
  }

  interface selectTodosDependency {
    selectAllTodos: () => Promise<TodoItem[]>;
  }

  interface addTodoDependency {
    title: string;
    description: string;
    addTodoItem: (title: string, description: string) => void;
  }
}

export default global;
