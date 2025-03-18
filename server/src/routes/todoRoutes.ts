import { Router } from "express";
import { selectTodos, addTodo } from "../usecase/todos"
import { selectAllTodos, addTodoItem } from "../infractructure/todoPersistence";

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
  try {
    const { title, description } = req.body;
    await addTodo({ title, description, addTodoItem });
    res.status(200).send("Successfully Added!");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
})

export default router;
