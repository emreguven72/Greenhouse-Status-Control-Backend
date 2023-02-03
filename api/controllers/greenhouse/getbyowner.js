module.exports = {


  friendlyName: 'Getbyowner',


  description: 'Get one owners all greenhouses by ownerId',


  inputs: {

    owner: {
      type: 'number',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const greenhouses = await sails.models.greenhouse.find({ owner: inputs.owner });

    exits.success({
      data: greenhouses
    })

  }


};
