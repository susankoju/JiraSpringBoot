import Model from './model';

class Issues extends Model {
  constructor(table) {
    super(table);
  }

  async getIssues(boardId) {
    return this.pool.query(
      `SELECT i.*, u.given_name, u.family_name, u.picture, u.email FROM issues as i LEFT JOIN users as u on i.assignee_id=u.id WHERE board_id=${boardId}`
    );
  }

  async updateIssue(issueId, body) {
    let changes = `SET id=${issueId}`;
    for (const key in body) {
      changes += `, ${key}`;
      if (Number.isSafeInteger(body[key])) {
        changes += `=${body[key]}`;
      } else {
        changes += `='${body[key]}'`;
      }
    }

    return this.pool.query(
      `UPDATE issues ${changes} WHERE id =${issueId} RETURNING *`
    );
  }

  async removeIssue(issueId) {
    return this.pool.query(
      `DELETE FROM issues WHERE id=${issueId} RETURNING *`
    );
  }
}

export default Issues;
