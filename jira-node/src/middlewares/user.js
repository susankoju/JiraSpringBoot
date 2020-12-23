import Model from '../models/model';

const usersModel = new Model('users');

const get_current_user = async (req, res, next) => {
    console.log(req.headers)
    console.log("LAS")
    const { email } = req.headers;
    // if (!email) {
    //   return res.status(300).json({ messages: 'Must include email in header' });
    // }
    // current_user = await usersModel.findOne({"email":email})
    req.headers["id"] = 1
    next()
}

module.exports = {
    get_current_user
}
