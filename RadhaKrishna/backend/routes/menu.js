const express = require('express');
const MenuItem = require('../models/MenuItem');
const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find({ available: true });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get menu items by category
router.get('/category/:category', async (req, res) => {
  try {
    const items = await MenuItem.find({ 
      category: req.params.category, 
      available: true 
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new menu item (admin only)
router.post('/', async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;