import Model from '../models/model';

const usersModel = new Model('users');

export const signup = async (req, res) => {
  const {
    first_name, last_name, email
  } = req.body;
  if (!first_name || !last_name || !email) {
    return res.status(300).json({ messages: 'User first_name, last_name and email is required!' });
  }
  const columns = 'first_name, last_name, email';
  const values = `'${first_name}', '${last_name}', '${email}'`;
  try {
    const data = await usersModel.insertWithReturn(columns, values);

    return res.status(201).json({ users: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};

export const listUsers = async (req, res) => {
  try {
    const data = await usersModel.select('*');
    return res.status(200).json({ users: data.rows });
  } catch (err) {
    return res.status(500).json({ messages: err.stack });
  }
};
