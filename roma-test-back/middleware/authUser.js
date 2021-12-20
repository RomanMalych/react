const jwt = require('jsonwebtoken');
const { secret } = require('../config.json');

const UserModel = require('../models/user');

const jwtVerify = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return { id: null };
  }
};

module.exports = async (req, res, next) => {
  // console.log(req.headers.authorization);

  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'Пользователь не авторизован' });
  }

  const token = req.headers.authorization.split(' ')[1];
  // console.log(token);

  const result = jwtVerify(token);
  // console.log(result);

  if (!result.id) {
    res.status(403).json({ error: 'Неверный токен' });
  }

  const user = await UserModel.query().findById(result.id).select('id', 'username');

  if (!user) {
    res.status(403).json({ error: 'Неизвестный пользователь' });
  }

  req.user = user;

  next();
};
