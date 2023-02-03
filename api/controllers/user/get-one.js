module.exports = {


  friendlyName: 'Get one',


  description: 'Fetch one user by id',


  inputs: {

    id: {
      type: 'number',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const user = await sails.models.user.findOne({ id: inputs.id }).decrypt();

    exits.success({
      data: user
    })

  }


};
