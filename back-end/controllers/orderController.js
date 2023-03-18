// ordersController.js (controller)

const Order = require('../models/order');

// Create new order
const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ order });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ orders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single order by ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update order by ID
const updateOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ order });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete order by ID
const deleteOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get all orders for a user
const getOrdersByUser = async (req, res) => {
    try {
      const orders = await Order.find({ user: req.params.id });
      res.status(200).json({ orders });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
  getOrdersByUser,
};
