import { Database } from 'sqlite3';

import sqlite3 from 'sqlite3';

const sqlite3Client = sqlite3.verbose();

export default class Connection {
  db: Database;
  constructor() {
    this.db = new sqlite3Client.Database('./db.sqlite3'); // is this db/close loop BP or do I need a pool and/or singleton
  }

  execute(statement: string): void {
    this.db.run(statement);
  }

  close() {
    this.db.close();
  }
}
