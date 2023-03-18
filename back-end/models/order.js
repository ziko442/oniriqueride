const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  carCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CarCategory',
    required: true
  },
  pickupLocation: {
    type: String,
    required: false
  },
  dropoffLocation: {
    type: String,
    required: false
  },
  pickupTime: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: false
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: false
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
