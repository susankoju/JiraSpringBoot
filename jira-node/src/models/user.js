import Model from './model';

class Users extends Model {
  constructor(table) {
    super(table);
  }

  async getUserByEmail(email) {
    return this.pool.query(`SELECT * FROM users WHERE email='${email}'`);
  }
}

export default Users;
