import express from 'express';

import { listUsers, signup } from '../controllers/users';
import {
  addProjectBoard,
  listProjectBoard,
} from '../controllers/projectBoards';
import {
  addProject,
  projectsList,
  updateProject,
  removeProject,
} from '../controllers/projects';
import {
  addIssues,
  listIssues,
  updateIssues,
  removeIssues,
} from '../controllers/issues';
import {
  addProjectMember,
  projectMembers,
} from '../controllers/projectMembers';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: 'API is working' }));

indexRouter.get('/users', listUsers);

indexRouter.get('/projects', projectsList);
indexRouter.post('/projects', addProject);

indexRouter.put('/projects/:id', updateProject);
indexRouter.delete('/projects/:id', removeProject);
indexRouter.get('/projects/:id/members', projectMembers);
indexRouter.post('/projects/:id/members', addProjectMember);

indexRouter.post('/projects/:id/boards', addProjectBoard);
indexRouter.get('/projects/:id/boards', listProjectBoard);

indexRouter.post('/projects/:id/boards/:boardId/issues', addIssues);
indexRouter.get('/projects/:id/boards/:boardId/issues', listIssues);
indexRouter.put('/projects/:id/boards/:boardId/issues/:issueId', updateIssues);
indexRouter.delete(
  '/projects/:id/boards/:boardId/issues/:issueId',
  removeIssues
);

indexRouter.post('/signup', signup);

export default indexRouter;
