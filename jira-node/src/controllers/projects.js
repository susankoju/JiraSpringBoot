import Model from '../models/model';

const projectsModel = new Model('projects');

export const projectsPage = async (req, res) => {
  try {
    const data = await projectsModel.select('name, key, type, created_at');
    res.status(200).json({ projects: data.rows });
  } catch (err) {
    res.status(500).json({ messages: err.stack });
  }
};

export const addProject = async (req, res) => {
  if (!Object.keys(req.body).length) {
    return res.status(300).json({ messages: 'Request body required' });
  }
  const {
    name, type, key, lead_id
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
