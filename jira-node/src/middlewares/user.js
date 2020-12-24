import Users from '../models/user';

const usersModel = new Users('users');

const get_current_user = async (req, res, next) => {
  let { email } = req.headers;

  if (req.body) {
    const { body } = req;
    const e = body.email;
    const user = await usersModel.getUserByEmail(e);
    if (!user.rowCount) {
      const {
        given_name, family_name, email, picture
      } = req.body;
      const columns = 'given_name, family_name, email, picture';
      const values = `'${given_name}', '${family_name}', '${email}', '${picture}'`;

      const data = await usersModel.insertWithReturn(columns, values);
      req.body = { ...req.body, ...data.rows[0] };
    }
    if (!email) {
      email = e;
    }
  }

  if (!email) {
    return res.status(300).json({ messages: 'Must include email in header' });
  }
  const current_user = await usersModel.getUserByEmail(email);
  req.headers.id = current_user.rows[0].id;
  next();
};

module.exports = {
  get_current_user,
};
