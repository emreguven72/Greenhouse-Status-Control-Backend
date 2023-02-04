module.exports = {


  friendlyName: 'Create',


  description: 'Create greenhouse.',


  inputs: {
    name: {
      type: 'string',
      required: true,
    },
    temperature: {
      type: 'number',
      required: true
    },
    humidity: {
      type: 'number',
      required: true
    },
    address: {
      type: 'string',
      required: true
    },
    owner: {
      type: 'number',
      required: true
    }
    
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const newGreenhouse = await sails.models.greenhouse.create({
      name: inputs.name,
      temperature: inputs.temperature,
      humidity: inputs.humidity,
      address: inputs.address,
      owner: inputs.owner
    }).fetch();

    exits.success({
      message: 'Greenhouse created',
      data: newGreenhouse
    });

  }


};
