import Projects from '../models/projects';

const projectsModel = new Projects('projects');

export const projectsList = async (req, res) => {
  try {
    const { id } = req.headers;
    if (!id) {
      return res.status(300).json({ messages: 'Must include id in header' });
    }
    const data = await projectsModel.getProjects(id);
    return res.status(200).json({ projects: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};

export const addProject = async (req, res) => {
  if (!Object.keys(req.body).length) {
    return res.status(300).json({ messages: 'Request body required' });
  }
  const {
    name, type, key, lead_id = req.headers.id
  } = req.body;
  const columns = 'name, type, key, lead_id';
  const values = `'${name}', '${type}', '${key}', '${lead_id}'`;
  try {
    const data = await projectsModel.insertWithReturn(columns, values);
    return res.status(200).json({ projects: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id: projectId } = req.params;
    const data = await projectsModel.updateProject(projectId, req.body);

    return res.status(201).json({ projects: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};

export const removeProject = async (req, res) => {
  try {
    const { id: projectId } = req.params;
    const data = await projectsModel.removeProject(projectId);

    return res.status(200).json({ projects: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};
