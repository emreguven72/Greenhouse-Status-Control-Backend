module.exports = {


  friendlyName: 'Getbyownername',


  description: 'Getbyownername greenhouse.',


  inputs: {

    email: {
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const user = await sails.models.user.findOne({ email: inputs.email }).populate('greenHouses');
    const greenhouses = user.greenHouses;

    exits.success({
      data: greenhouses
    });

  }


};
