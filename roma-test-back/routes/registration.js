const router = require('express').Router();

const bcrypt = require('bcrypt');
const _ = require('lodash');

const UserModel = require('../models/user');

router.post(
  '/',
  async (req, res) => {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const isUserExists = await UserModel.query().findOne('username', '=', username.toLowerCase());

    if (isUserExists) {
      res.status(400).json({ error: 'user exists' });
    }

    const user = await UserModel.query().insert({
      username: username.toLowerCase(),
      password: hash,
    });

    console.log(user);

    res.status(400).json(_.pick(user, 'id', 'username'));
  },
);

module.exports = router;
