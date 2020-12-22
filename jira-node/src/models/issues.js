import Model from './model';

class Issues extends Model {
  constructor(table) {
    super(table);
  }

  async getIssues(boardId) {
    return this.pool.query(`SELECT * FROM issues WHERE board_id=${boardId}`);
  }
}

export default Issues;
