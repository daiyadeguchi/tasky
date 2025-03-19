import pg, { ClientConfig, QueryResult } from 'pg';

const dbConfig: ClientConfig = {
  user: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  database: 'tasky-db'
}

export const selectAllTodos = async (): Promise<TodoItem[]> => {
  const client = new pg.Client(dbConfig);
  client.connect()

  var items: TodoItem[] = [];
  await client.query('SELECT * FROM todos')
    .then((result: QueryResult) => {
      for (var res of result.rows) {
        items.push({ id: res['id'], status: res['status'], title: res['title'], description: res['description'] });
      }
      client.end();
    });

  return items;
}

export const addTodoItem = async (title: string, description: string) => {
  const client = new pg.Client(dbConfig);
  client.connect()

  await client.query('INSERT INTO todos (status, title, description) VALUES (0, $1, $2)', [title, description])
    .then(() => client.end());
}

export const updateTodoItem = async (id: string, status: number, title: string, description: string) => {
  const client = new pg.Client(dbConfig);
  client.connect();

  await client.query('UPDATE todos SET status=$1, title=$2, description=$3 WHERE id=$4', [status, title, description, id])
    .then(() => client.end());

}
