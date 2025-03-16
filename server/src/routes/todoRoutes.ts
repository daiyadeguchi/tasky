import { Router, Request, Response } from "express";

const router = Router();

interface TodoItem {
  id: number
  status: number
  title: string
  description: string
}

const items: TodoItem[] = [
  { id: 1, status: 0, title: "laundry", description: "do laundry. dont forget to bring quarters" },
  { id: 2, status: 1, title: "workout", description: "push day" },
  { id: 3, status: 2, title: "study", description: "math" }
]

router.get("/todos", (req: Request, res: Response) => {
  res.json(items)
})

export default router;