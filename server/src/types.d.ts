
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
}

export default global;
