const router = require('express').Router();

const _ = require('lodash');
const LocationModel = require('../models/location');
const authUser = require('../middleware/authUser');
const asyncHandler = require('../middleware/asyncHandler');

router.use(authUser);

router.post(
  '/add',
  async (req, res) => {
    const { name, coords, comment } = req.body;

    const isLocationExists = await LocationModel.query().where({
      name: name.toLowerCase(),
    }).select('*');

    console.log(isLocationExists);

    if (isLocationExists.length) {
      res.status(400).json({ error: 'location exists' });
    }

    const user_id = req.user.id;

    const location = await LocationModel.query().insert({
      name: name.toLowerCase(),
      coords,
      comment,
      user_id,
    });

    console.log(location);

    res.status(400).json(_.pick(location, 'id', 'name', 'coords', 'comment'));
  },
);

router.get(
  '/my',
  asyncHandler(
    async (req, res) => {
      const user_id = req.user.id;
      const location = await LocationModel.query().findOne({ user_id }).select(['name', 'coords', 'comment']);
      res.status(200).json(location);
      console.log(location);
    },
  ),
);

router.get(
  '/:id',
  async (req, res) => {
    const { id } = req.params;
    const serializeId = Number(id);

    if (typeof serializeId !== 'number' || Number.isNaN(serializeId)) {
      res.status(400).json({ error: 'Ошибка' });
    }
    const location = await LocationModel.query().findById(serializeId).select(['id', 'name']);
    res.status(200).json(location);
  },
);

module.exports = router;
