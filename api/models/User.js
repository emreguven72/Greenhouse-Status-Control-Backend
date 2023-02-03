/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    email: {
      type: 'string',
      required: true,
      unique: true,
      columnName: 'email_address'
    },

    password: {
      type: 'string',
      required: true,
      encrypt: true,
      columnName: 'password'
    },

    name: {
      type: 'string',
      required: true,
      columnName: 'name'
    },

    surname: {
      type: 'string',
      required: true,
      columnName: 'surname'
    },

    phoneNumber: {
      type: 'string',
      required: true,
      unique: true,
      columnName: 'phone_number'
    },

    greenHouses: {
      collection: 'greenhouse',
      via: 'owner'
    }

  },

};

