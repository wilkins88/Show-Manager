import { Application } from 'express';
import createTables from './db/create-tables';

export default function boot(app: Application): void {
  createTables();
}
