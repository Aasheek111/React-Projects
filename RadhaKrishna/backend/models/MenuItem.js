const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String },
  available: { type: Boolean, default: true },
  spiceLevel: { type: String, enum: ['Mild', 'Medium', 'Hot', 'Extra Hot'] },
  isVegetarian: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);