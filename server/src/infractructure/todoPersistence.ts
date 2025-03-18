import pg, { ClientConfig, QueryResult } from 'pg';

export default async function selectAllTodos(): Promise<TodoItem[]> {
  const dbConfig: ClientConfig = {
    user: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    database: 'tasky-db'
  }

  var items: TodoItem[] = [];

  const client = new pg.Client(dbConfig);

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

