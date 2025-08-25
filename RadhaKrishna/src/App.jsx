import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem._id === item._id);
    
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem._id === item._id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    
    toast.success(`${item.name} added to cart!`);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCartItems(cartItems.map(item => 
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item._id !== itemId));
    toast.info('Item removed from cart');
  };

  const placeOrder = async (orderData) => {
    try {
      await axios.post('http://localhost:5000/api/orders', orderData);
      setCartItems([]);
      toast.success('Order placed successfully!');
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <Menu onAddToCart={addToCart} />
      <About />
      <Contact />
      <Footer />
      <Cart 
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onPlaceOrder={placeOrder}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;