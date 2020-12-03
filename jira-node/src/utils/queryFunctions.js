import { pool } from '../models/pool';
import {
  begin,
  commit,
  insertProjects,
  dropUsersTable,
  createUsersTable,
  dropProjectsTable,
  createProjectsTable,
  dropProjectMembersTable,
  createProjectMembersTable,
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([
  begin,
  dropProjectMembersTable,
  dropProjectsTable,
  dropUsersTable,
  commit
]);
export const createTables = () => executeQueryArray([
  begin,
  createUsersTable,
  createProjectsTable,
  createProjectMembersTable,
  commit
]);
export const insertIntoTables = () => executeQueryArray([ insertProjects ]);
