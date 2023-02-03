/**
 * Greenhouse.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true,
      columnName: 'name'
    },

    temperature: {
      type: 'number',
      required: true,
      columnName: 'temperature'
    },

    humidity: {
      type: 'number',
      required: true,
      columnName: 'humidity'
    },

    owner: {
      model: 'user'
    }

  },

};

