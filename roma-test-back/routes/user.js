const router = require('express').Router();

const _ = require('lodash');
const UserModel = require('../models/user');

const authUser = require('../middleware/authUser');

router.use(authUser);

router.get('/me', async (req, res) => {
  console.log(req.user);

  res.status(200).json({ me: _.pick(req.user, ['id', 'username']) });
});

router.get(
  '/:id',
  async (req, res) => {
    // console.log(req.user);
    const { id } = req.params;
    const serializeId = Number(id);

    if (typeof serializeId !== 'number' || Number.isNaN(serializeId)) {
      res.status(400).json({ error: 'Ошибка' });
    }

    const user = await UserModel.query().findById(serializeId).select(['id', 'username']);

    res.status(200).json(user);
  },
);

router.get('/', async (req, res) => {
  const user = await UserModel.query().select(['id', 'username']);
  res.status(200).json(user);
});

module.exports = router;
