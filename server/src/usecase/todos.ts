//export default async function selectTodos(selectTodosDependency: selectTodosDependency): Promise<TodoItem[]> {
//  return selectTodosDependency.selectAllTodos();
//}
export const selectTodos = async (selectTodosDependency: selectTodosDependency): Promise<TodoItem[]> => {
  return selectTodosDependency.selectAllTodos();
}

export const addTodo = async (addTodoDependency: addTodoDependency) => {
  return addTodoDependency.addTodoItem(addTodoDependency.title, addTodoDependency.description);
}
