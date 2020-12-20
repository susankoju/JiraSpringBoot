import Model from './model';

class ProjectBoards extends Model {
  constructor(table) {
    super(table);
  }

  async getProjectBoards(projectId) {
    return this.pool.query(`SELECT * FROM boards WHERE project_id=${projectId}`);
  }
}

export default ProjectBoards;
