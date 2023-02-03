module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


  inputs: {

    email: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true
    },
    surname: {
      type: 'string',
      required: true
    },
    phoneNumber: {
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs,exits) {

    const newUser = await sails.models.user.create({
      email: inputs.email,
      password: inputs.password,
      name: inputs.name,
      surname: inputs.surname,
      phoneNumber: inputs.phoneNumber
    }).fetch();
    
    exits.success({
      message: 'User created',
      data: newUser
    })

  }


};
