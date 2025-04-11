const express = require('express');
const { createOrder, getOrders } = require('../controllers/ordersController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new order route
router.post('/', authMiddleware, createOrder);

// Get all orders for a user route
router.get('/:userId', authMiddleware, getOrders);

module.exports = router;
