const mongoose = require('mongoose');

const energyDataSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['consumption', 'investment']
  },
  year: Number,
  solar: Number,
  wind: Number,
  technology: String,
  investment: Number
});

module.exports = mongoose.model('EnergyData', energyDataSchema);