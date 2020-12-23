import Issues from '../models/issues';

const issuesModel = new Issues('issues');

export const addIssues = async (req, res) => {
  try {
    const {
      title,
      type,
      status = 'NEW',
      priority,
      description,
      sprint,
      story_point,
      assignee_id,
      reporter_id,
      due_date
    } = req.body;
    if (!title) {
      return res.status(400).json({ messages: 'title of board is required!' });
    }
    const { id, boardId } = req.params;
    // let values = `${boardId}, '${title}', '${type}', '${status}', '${priority}', '${description}', ${sprint}, ${story_point}, ${assignee_id}, ${reporter_id}, '${due_date}'`;
    // let columns = 'board_id, title, type, status , priority, description, sprint, story_point, assignee_id, reporter_id, due_date ';

    let values = `${boardId}`
    let columns = 'board_id'
    for(const key in req.body) {
      columns += `, ${key}`;
      if (Number.isSafeInteger(req.body[key])) {
        values += `, ${req.body[key]}`
      } else {
        values += `, '${req.body[key]}'`
      }
    }

    const data = await issuesModel.insertWithReturn(columns, values);

    return res.status(201).json({ issue: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};

export const listIssues = async (req, res) => {
  try {
    const { boardId } = req.params;
    const data = await issuesModel.getIssues(boardId);
    
    return res.status(201).json({ issues: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};

export const updateIssues = async (req, res) => {
  try {
    const { issueId } = req.params;
    const data = await issuesModel.updateIssue(issueId, req.body);
    
    return res.status(201).json({ issues: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }

}
