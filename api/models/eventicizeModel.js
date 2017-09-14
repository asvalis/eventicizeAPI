'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the event'
  },Event_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Events', EventSchema);