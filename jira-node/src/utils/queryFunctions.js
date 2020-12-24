import { pool } from '../models/pool';
import {
  alterBoardTable,
  createIssuesTable,
  alterProjectMemberTable,
  alterProjectsTable,
  insertProjects,
  createUsersTable,
  createBoardsTable,
  createProjectsTable,
  createProjectMembersTable,
  alterIssuesTable,
  dropSchema,
} from './queries';

export const executeQueryArray = async (arr) => new Promise((resolve) => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropSchema ]);
export const createTables = () => executeQueryArray([
  createUsersTable,
  createProjectsTable,
  createProjectMembersTable,
  createIssuesTable,
  createBoardsTable,
]);

export const alterTables = () => executeQueryArray([
  alterProjectsTable,
  alterBoardTable,
  alterProjectMemberTable,
  alterIssuesTable,
]);

export const insertIntoTables = () => executeQueryArray([ insertProjects ]);
