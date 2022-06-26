import { Database, sqlite3 } from 'sqlite3';

const sqlite3: sqlite3 = require('sqlite3').verbose();

export default class Connection {
    db: Database; 
    constructor() {
        this.db = new sqlite3.Database('./db.sqlite3'); // is this db/close loop BP or do I need a pool and/or singleton
    }

    init() {
        this.db.run(`
            CREATE TABLE IF NOT EXISTS shows(
                id integer PRIMARY KEY,
                name text,
                code text UNIQUE
            );`
        );
    }

    close() {
        this.db.close();
    }
}