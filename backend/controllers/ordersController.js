const Order = require('../models/order');

// Create a new order
exports.createOrder = async (req, res) => {
    const { customerId, source, destination, items, price, scheduledDate } = req.body;

    try {
        const newOrder = new Order({
            customerId,
            source,
            destination,
            items,
            price,
            scheduledDate,
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all orders for a user
exports.getOrders = async (req, res) => {
    const { userId } = req.params;

    try {
        const orders = await Order.find({ customerId: userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
