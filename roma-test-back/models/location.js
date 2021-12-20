const { Model } = require('objection');

class Location extends Model {
  static get tableName() {
    return 'locations';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: {
          type: 'string',
        },
        coords: {
          type: 'array',
          items: {
            type: 'decimal',
          },
        },
        comment: {
          type: 'string',
        },
        user_id: {
          type: 'integer',
        },
      },
    };
  }

  static get relationMappings() {
    const User = require('./user');

    return {
      users: {
        relation: Model.BelongsToOneRelation,
        model: User,
        join: {
          from: 'location.user_id',
          to: 'user.id',
        },
      },
    };
  }
}

module.exports = Location;
