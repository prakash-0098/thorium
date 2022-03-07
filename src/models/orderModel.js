const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId; 

const orderSchema = new mongoose.Schema( {
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    productId: {
        type: ObjectId,
        ref: 'Product'
    },
    amount: Number, 
    isFreeAppUser: Boolean,
    date: Date
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) //users
