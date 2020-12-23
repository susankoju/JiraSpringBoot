import Model from './model';

class Issues extends Model {
  constructor(table) {
    super(table);
  }

  async getIssues(boardId) {
    return this.pool.query(`SELECT * FROM issues as i INNER JOIN users as u on i.assignee_id=u.id WHERE board_id=${boardId}`);
  }

  async updateIssue(issueId, body) {
    let changes = `SET id=${issueId}`
    for(const key in body) {
      changes += `, ${key}`;
      if (Number.isSafeInteger(body[key])) {
        changes += `=${body[key]}`
      } else {
        changes += `='${body[key]}'`
      }
    }

    return this.pool.query(`UPDATE issues ${changes} WHERE id =${issueId}`)
  }
}

export default Issues;
