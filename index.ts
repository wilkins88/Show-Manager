import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import Connection from './src/db/connection';

dotenv.config();

const app: Application = express();

const conn = new Connection();
conn.init();
conn.close();

app.use(express.static('ui'));

app.get('/graphql', (req: Request, res: Response): void => {
    res.send('API STUFF');
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Example app listening on port ${process.env.SERVER_PORT}`);
});