const mongoose = require('mongoose');

module.exports = mongoose.Schema({
  name: String,
  temperature: [Number],
  pulse: [Number],
  respiration: [Number],
  oxygen_saturation: [Number],
  created: Date,
  updated: Date,
}, {collection: 'patient'});