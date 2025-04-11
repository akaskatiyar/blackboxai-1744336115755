const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed', 'canceled'],
        default: 'pending',
    },
    price: {
        type: Number,
        required: true,
    },
    scheduledDate: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Order', orderSchema);
