import express from 'express';

import { addProject, projectsPage } from '../controllers/projects';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: 'API is working' }));

indexRouter.get('/projects', projectsPage);
indexRouter.post('/projects', addProject);

export default indexRouter;
