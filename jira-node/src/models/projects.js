import Model from './model';

class Projects extends Model {
  constructor(table) {
    super(table);
  }

  getProjects(user_id) {
    const query = `SELECT DISTINCT on (p.id)p.id, p.name, p.key, p.type, p.created_at, p.lead_id, u.id as user_id, u.given_name, u.family_name, u.email, u.picture FROM projects as p LEFT JOIN project_members as m on p.id=m.project_id RIGHT JOIN users as u on p.lead_id=u.id WHERE p.lead_id=${user_id} OR  m.user_id=${user_id}`;
    return this.pool.query(query);
  }
}

export default Projects;
