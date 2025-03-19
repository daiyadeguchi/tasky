export const selectTodos = async (dep: selectTodosDependency): Promise<TodoItem[]> => {
  return dep.selectAllTodos();
}

export const addTodo = async (dep: addTodoDependency) => {
  return dep.addTodoItem(dep.title, dep.description);
}

export const updateTodo = async (dep: updateTodoDependency) => {
  return dep.updateTodoItem(dep.id, dep.status, dep.title, dep.description);
}
