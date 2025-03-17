import { Router, Request, Response } from "express";
import pg from "pg";

const dbConfig = {
  user: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  port: '5432',
  database: 'tasky-db'
}

const client = new pg.Client(dbConfig);

const router = Router();

interface TodoItem {
  id: number
  status: number
  title: string
  description: string
}

router.get("/todos", (req: Request, res: Response) => {
  var items: TodoItem[] = [];
  client
    .connect()
    .then(() => {
      console.log("Connected to db")
      client.query('SELECT * FROM todos', (err: Error, result: pg.Result) => {
        if (err) {
          console.error("Error executing query", err);
        } else {
          for (var res of result.rows) {
            items.push({ id: res['id'], status: res['status'], title: res['title'], description: res['description'] });
            res.json(items);
          }
        }

        client
          .end()
          .then(() => {
            console.log("db closed");
          })
          .catch((err: Error) => {
            console.error("error closing db", err);
          })
      })
    })
    .catch((err: Error) => {
      console.error("error connection db", err);
    })

})

export default router;
