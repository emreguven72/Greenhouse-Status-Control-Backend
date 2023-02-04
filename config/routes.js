module.exports.routes = {
  
  //----------------------------- USER REQUESTS ------------------------------------
  'GET /user/getAll': {
    controller: 'user',
    action: 'get-all'
   },

   'GET /user/get/:id': {
    controller: 'user',
    action: 'get-one'
   },

   'GET /user/getbyemail': {
    controller: 'user',
    action: 'getbyemail'
   },

   'POST /user/create': {
    controller: 'user',
    action: 'create'
   },


   //----------------------------- GREENHOUSE REQUESTS ------------------------------------
   'GET /greenhouse/getAll': {
    controller: 'greenhouse',
    action: 'get-all'
   },

   'GET /greenhouse/get/:id': {
    controller: 'greenhouse',
    action: 'get-one'
   },

   'GET /greenhouse/getbyowner/:owner': {
    controller: 'greenhouse',
    action: 'getbyowner'
   },

   'GET /greenhouse/getbyemail': {
    controller: 'greenhouse',
    action: 'getbyemail'
   },

   'POST /greenhouse/create': {
    controller: 'greenhouse',
    action: 'create'
   },

   'PATCH /greenhouse/update': {
    controller: 'greenhouse',
    action: 'update'
   },

};
