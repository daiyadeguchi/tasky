import pg, { ClientConfig, QueryResult } from 'pg';

interface TodoItem {
  id: number
  status: number
  title: string
  description: string
}

async function selectTodos() {
  const dbConfig: ClientConfig = {
    user: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    database: 'tasky-db'
  }

  const client = new pg.Client(dbConfig);

  var items: TodoItem[] = [];

  client.connect()
  await client.query('SELECT * FROM todos')
    .then((result: QueryResult) => {
      for (var res of result.rows) {
        items.push({ id: res['id'], status: res['status'], title: res['title'], description: res['description'] });
      }
      client.end();
    });

  return items;
}

export default selectTodos();
