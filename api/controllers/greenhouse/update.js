module.exports = {


  friendlyName: 'Update',


  description: 'Update greenhouse.',


  inputs: {

    id: {
      type: 'number',
      required: true
    },

    temperature: {
      type: 'number',
      required: true
    },

    humidity: {
      type: 'number',
      required: true
    },

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const updatedData = await sails.models.greenhouse.updateOne({ id: inputs.id }).set({
      id: inputs.id,
      temperature: inputs.temperature,
      humidity: inputs.humidity
    });

    if(updatedData) {
      exits.success({
        message: "Data Updated"
      });
    } else {
      exits.success({
        message: "there is no greenhouse with that id"
      });
    }

  }

};
