module.exports = {


  friendlyName: 'Get all',


  description: 'Fetching all users in database',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const users = await sails.models.user.find().decrypt();
    
    exits.success({
      data: users
    })

  }


};
