export default async function selectTodos(selectTodosDependency: selectTodosDependency): Promise<TodoItem[]> {
  return selectTodosDependency.selectAllTodos();
}
