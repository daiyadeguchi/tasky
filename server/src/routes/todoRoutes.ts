import { Router } from "express";
import selectTodos from "../usecase/selectTodos"

const router = Router();

router.get("/todos", async (req, res) => {
  try {
    Promise.all([selectTodos]).then((todos) => {
      res.json(todos);
    })
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

export default router;
