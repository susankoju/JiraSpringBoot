import Model from '../models/model';

const usersModel = new Model('users');

export const signup = async (req, res) => {
  const {
    given_name, family_name, email, picture
  } = req.body;
  if (!email) {
    return res.status(300).json({ messages: 'email is required!' });
  }
  const columns = 'given_name, family_name, email, picture';
  const values = `'${given_name}', '${family_name}', '${email}', '${picture}'`;
  try {
    const data = await usersModel.insertWithReturn(columns, values);

    return res.status(201).json({ users: data.rows });
  } catch (err) {
    return res.status(200).json({ messages: err.stack });
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
