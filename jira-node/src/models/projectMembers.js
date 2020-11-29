import Model from './model';

class ProjectMembers extends Model {
  constructor(table) {
    super(table);
  }

  async getProjectMembers(projectId) {
    return this.pool.query(`SELECT DISTINCT on (user_id) user_id, * FROM users as u LEFT JOIN "project_members" as p on u.id=p.user_id WHERE project_id=${projectId}`);
  }
}

export default ProjectMembers;
