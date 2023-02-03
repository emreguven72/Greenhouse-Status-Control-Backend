module.exports = {


  friendlyName: 'Get all',


  description: 'Fetch all greenhouse records',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const greenhouses = await sails.models.greenhouse.find();

    exits.success({
      data: greenhouses
    })

  }


};
