const router = require('express').Router();
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');

const { secret } = require('../config.json');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.query().findOne('username', '=', username.toLowerCase());

  if (!user || !user.id) {
    res.status(400).json({ error: 'User or password wrong' });
  }

  const authResult = await bcrypt.compare(password, user.password);

  if (!authResult) {
    res.status(400).json({ error: 'User or password wrong' });
  }

  const token = jwt.sign({ id: user.id, sub: 'roma-test' }, secret, { expiresIn: '1d' });

  res.json({ token });
});

module.exports = router;
