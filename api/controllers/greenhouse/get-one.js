module.exports = {


  friendlyName: 'Get one',


  description: 'Fetch one greenhouse record by id',


  inputs: {

    id: {
      type: 'number',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const greenhouse = await sails.models.greenhouse.findOne({ id: inputs.id });

    exits.success({
      data: greenhouse
    })

  }


};
