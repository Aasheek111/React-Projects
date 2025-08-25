import React, { useState } from 'react';
import { FiMinus, FiPlus, FiX, FiShoppingCart } from 'react-icons/fi';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onPlaceOrder, isOpen, onClose }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    orderType: 'dine-in'
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;
    
    const orderData = {
      ...customerInfo,
      items: cartItems.map(item => ({
        menuItem: item._id,
        quantity: item.quantity,
        price: item.price
      })),
      totalAmount: total
    };
    
    onPlaceOrder(orderData);
    onClose();
  };

  return (
    <>
      {cartItems.length > 0 && (
        <button
          onClick={() => onClose ? onClose() : null}
          className="fixed bottom-4 right-4 bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-700 transition"
        >
          View Cart ({cartItems.length})
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl animate-slide-up sm:animate-fade-in">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Your Cart</h3>
                <button onClick={onClose} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition">
                  <FiX className="text-xl" />
                </button>
              </div>
              <p className="text-orange-100 mt-1">{cartItems.length} items</p>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] sm:max-h-96">
              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FiShoppingCart className="mx-auto text-4xl mb-4" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item._id} className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-xl">
                    <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{item.name}</h4>
                      <p className="text-orange-600 font-medium text-sm">NRS {item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => onUpdateQuantity(item._id, item.quantity - 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200 transition-colors duration-200"
                      >
                        <FiMinus className="text-xs" />
                      </button>
                      <span className="w-6 text-center font-semibold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200 transition-colors duration-200"
                      >
                        <FiPlus className="text-xs" />
                      </button>
                      <button 
                        onClick={() => onRemoveItem(item._id)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors duration-200 ml-1"
                      >
                        <FiX className="text-xs" />
                      </button>
                    </div>
                  </div>
                ))
              )}

              {cartItems.length > 0 && (
                <>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-4 text-gray-800">Customer Information</h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      />
                      <select
                        value={customerInfo.orderType}
                        onChange={(e) => setCustomerInfo({...customerInfo, orderType: e.target.value})}
                        className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        <option value="dine-in">Dine In</option>
                        <option value="takeaway">Takeaway</option>
                        <option value="delivery">Delivery</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-gray-800">Total: NRS {total}</span>
                    </div>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={!customerInfo.name || !customerInfo.phone || cartItems.length === 0}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed"
                    >
                      Place Order
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;