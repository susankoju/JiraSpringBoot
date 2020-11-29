import express from 'express';

import { signup } from '../controllers/users';
import { addProject, projectsList } from '../controllers/projects';
import { addProjectMember, projectMembers } from '../controllers/projectMembers';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: 'API is working' }));

indexRouter.get('/projects', projectsList);
indexRouter.post('/projects', addProject);
indexRouter.get('/projects/:id/members', projectMembers);
indexRouter.post('/projects/:id/members', addProjectMember);

indexRouter.post('/signup', signup);

export default indexRouter;
