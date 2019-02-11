//bussiness model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
    personName: {
    type: String
  },
  bussinessName: {
    type: String
  },
  gstNumber: {
    type: Number
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
