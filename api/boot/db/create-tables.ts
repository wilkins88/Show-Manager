import Connection from '../../db/connection';

export default function createTables(): void {
  const conn = new Connection();
  conn.execute(`CREATE TABLE IF NOT EXISTS shows(
            id integer PRIMARY KEY,
            name text,
            code text UNIQUE
        );`);
  conn.close();
}
