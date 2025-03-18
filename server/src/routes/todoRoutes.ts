import { Router } from "express";
import selectTodos from "../usecase/selectTodos"
import selectAllTodos from "../infractructure/todoPersistence";

const router = Router();

router.get("/todos", async (_, res) => {
  try {
    Promise.all([selectTodos({ selectAllTodos })]).then((todos) => {
      res.json(todos);
    })
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

export default router;
