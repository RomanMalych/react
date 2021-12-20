const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username'],

      properties: {
        id: { type: 'integer' },
        username: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    };
  }

  static get relationMappings() {
    const Location = require('./location');

    return {
      locations: {
        relation: Model.HasManyRelation,
        model: Location,
        join: {
          from: 'location.user_id',
          to: 'user.id',
        },
      },
    };
  }
}

module.exports = User;
