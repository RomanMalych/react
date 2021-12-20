const Ajv = require('ajv');
const AjvP = require('ajv/dist/jtd');

const ajvP = new AjvP();

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const validator = (schemas = {
  body: null,
  params: null,
}) => (req, res, next) => {
  const { body, params } = schemas;

  if (!body && !params) {
    next();
  }

  if (body) {
    const validate = ajv.compile(body);
    const valid = validate(req.body);
    if (!valid) {
      res.json({ error: valid });
    }
  }
  if (params) {
    const validate = ajv.compile(params);

    const valid = validate(req.params);
    if (!valid) {
      res.json({ error: valid });
    }
  }

  next();
};

module.exports = validator;
