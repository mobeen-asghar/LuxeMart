import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, CreditCard, ShoppingBag } from 'lucide-react';
import { getCartItems, setCartItems } from '../utils/storage';

const Cart: React.FC = () => {
  const [cartItems, setCartItemsState] = useState(getCartItems());
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    setCartItemsState(getCartItems());
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }

    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItemsState(updatedItems);
    setCartItems(updatedItems);
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItemsState(updatedItems);
    setCartItems(updatedItems);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTax = () => {
    return getTotal() * 0.08; // 8% tax
  };

  const getShipping = () => {
    return getTotal() > 10000 ? 0 : 100; // Free shipping over $10,000
  };

  const getFinalTotal = () => {
    return getTotal() + getTax() + getShipping();
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      setCartItemsState([]);
      setCartItems([]);
      alert('Order placed successfully! You will receive a confirmation email shortly.');
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag className="h-24 w-24 text-gold/30 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gold mb-4">Your Cart is Empty</h2>
        <p className="text-ivory/70 mb-8">Add some luxury items to your cart to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gold font-serif">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gold">{item.name}</h3>
                  <p className="text-ivory/70 text-sm">{item.description}</p>
                  <p className="text-xl font-bold text-gold mt-2">
                    ${item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full bg-gold/20 hover:bg-gold/30 text-gold transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  
                  <span className="text-ivory font-semibold w-8 text-center">
                    {item.quantity}
                  </span>
                  
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full bg-gold/20 hover:bg-gold/30 text-gold transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-6 sticky top-6"
          >
            <h3 className="text-xl font-bold text-gold mb-6">Order Summary</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between text-ivory/80">
                <span>Subtotal</span>
                <span>${getTotal().toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-ivory/80">
                <span>Tax</span>
                <span>${getTax().toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-ivory/80">
                <span>Shipping</span>
                <span>
                  {getShipping() === 0 ? 'Free' : `$${getShipping()}`}
                </span>
              </div>
              
              <div className="border-t border-gold/20 pt-4">
                <div className="flex justify-between text-xl font-bold text-gold">
                  <span>Total</span>
                  <span>${getFinalTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full mt-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isCheckingOut ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <CreditCard className="h-5 w-5" />
                  <span>Checkout</span>
                </>
              )}
            </motion.button>

            <p className="text-xs text-ivory/50 mt-4 text-center">
              Secure checkout with 256-bit SSL encryption
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;