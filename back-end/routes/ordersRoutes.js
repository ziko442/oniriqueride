
const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth-middleware');
const ordersController = require('../controllers/orderController');

// Create new order
router.post('/', ordersController.createOrder);

// Get all orders
router.get('/', ordersController.getAllOrders);

// Get single order by ID
router.get('/:id', ordersController.getOrderById);

// Update order by ID
router.put('/:id', ordersController.updateOrderById);

// Delete order by ID
router.delete('/:id', ordersController.deleteOrderById);

// Route to get all orders for a user
router.get('/user/:id', authMiddleware, ordersController.getOrdersByUser);



module.exports = router;
