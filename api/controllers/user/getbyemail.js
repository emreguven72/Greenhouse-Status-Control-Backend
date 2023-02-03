module.exports = {


  friendlyName: 'Getbyemail',


  description: 'Getbyemail user.',


  inputs: {
    email: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const user = await sails.models.user.findOne({ email:inputs.email }).decrypt();

    exits.success({
      data: user
    })

  }


};
