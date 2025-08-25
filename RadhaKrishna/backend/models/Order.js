const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerEmail: { type: String },
  items: [{
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'],
    default: 'pending'
  },
  orderType: { type: String, enum: ['dine-in', 'takeaway', 'delivery'], required: true },
  deliveryAddress: { type: String },
  tableNumber: { type: Number },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);