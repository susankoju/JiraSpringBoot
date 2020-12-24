import ProjectBoards from '../models/projectBoards';

const projectBoardModel = new ProjectBoards('boards');

export const addProjectBoard = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ messages: 'name of board is required!' });
    }
    const { id } = req.params;
    const values = `${id}, '${name}'`;
    const columns = 'project_id, name';
    const data = await projectBoardModel.insertWithReturn(columns, values);

    return res.status(201).json({ board: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};

export const listProjectBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await projectBoardModel.getProjectBoards(id);

    return res.status(201).json({ boards: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};
