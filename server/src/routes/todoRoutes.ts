import { Router } from "express";
import { selectTodos, addTodo, updateTodo } from "../usecase/todos"
import { selectAllTodos, addTodoItem, updateTodoItem } from "../infractructure/todoPersistence";

const router = Router();

router.get("/todos", async (_, res) => {
  try {
    const todos = await selectTodos({ selectAllTodos });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/todo", async (req, res) => {
  const { title, description } = req.body;
  try {
    await addTodo({ title, description, addTodoItem });
    res.status(200).send("Successfully Added!");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

router.put("/updateTodo/:id", async (req, res) => {
  const { id } = req.params;
  const { status, title, description } = req.body;
  try {
    await updateTodo({ id, status, title, description, updateTodoItem })
    res.status(200).send("Successfully updated!");
  } catch {
    res.status(500).send("Internal Server Error");
  }
})

export default router;
