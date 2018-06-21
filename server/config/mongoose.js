var mongoose = require('mongoose');
const connecection = mongoose.connect('mongodb://localhost/tasks');
module.exports =  connecection;
