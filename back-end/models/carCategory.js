const mongoose = require('mongoose');

const carCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  maxPassengers: {
    type: Number,
    required: true
  },
  maxLuggage: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  costPerMile: {
    type: Number,
    required: true
  },
  costPerMinute: {
    type: Number,
    required: true
  }
});

const CarCategory = mongoose.model('CarCategory', carCategorySchema);

module.exports = CarCategory;
