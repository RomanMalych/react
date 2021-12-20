const { Model } = require('objection');
const Knex = require('knex');

const InitAdapterPg = () => {
  const knex = Knex({
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: '127.0.0.1',
      user: 'romanmalykh',
      password: '1Lollollol',
      database: 'romatestdb',
    },
  });

  Model.knex(knex);
};

module.exports = InitAdapterPg;
