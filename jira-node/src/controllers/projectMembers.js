import ProjectMembers from '../models/projectMembers';

const projectMembersModel = new ProjectMembers('project_members');

export const projectMembers = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await projectMembersModel.getProjectMembers(id);

    return res.status(200).json({ members: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};

export const addProjectMember = async (req, res) => {
  try {
    const { user_id } = req.body;
    if (!user_id) {
      return res.status(300).json({ messages: 'user_id is required!' });
    }
    const { id } = req.params;
    const values = `${id}, ${user_id}`;
    const columns = 'project_id, user_id';
    const data = await projectMembersModel.insertWithReturn(columns, values);

    return res.status(201).json({ members: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};
