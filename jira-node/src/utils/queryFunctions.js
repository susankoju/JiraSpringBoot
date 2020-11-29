import { pool } from '../models/pool';
import {
  insertProjects,
  dropProjectsTable,
  createProjectsTable,
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropProjectsTable ]);
export const createTables = () => executeQueryArray([ createProjectsTable ]);
export const insertIntoTables = () => executeQueryArray([ insertProjects ]);
