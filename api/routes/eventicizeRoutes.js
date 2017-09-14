'use strict';
module.exports = function(app) {
  var eventList = require('../controllers/eventicizeController.js');
  // todoList Routes
  app.route('/events/')
    .get(eventList.list_all_events)
    //.post(todoList.create_a_task);


  //app.route('/tasks/:taskId')
   // .get(todoList.read_a_task)
    //.put(todoList.update_a_task)
    //.delete(todoList.delete_a_task);
};