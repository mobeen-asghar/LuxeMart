import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { getWishlistItems, setWishlistItems, getCartItems, setCartItems } from '../utils/storage';

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItemsState] = useState(getWishlistItems());

  useEffect(() => {
    setWishlistItemsState(getWishlistItems());
  }, []);

  const removeFromWishlist = (id: number) => {
    const updatedItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItemsState(updatedItems);
    setWishlistItems(updatedItems);
  };

  const addToCart = (product: any) => {
    const cart = getCartItems();
    const existingItem = cart.find(item => item.id === product.id);
    let newCart;
    
    if (existingItem) {
      newCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    
    setCartItems(newCart);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-24 w-24 text-gold/30 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gold mb-4">Your Wishlist is Empty</h2>
        <p className="text-ivory/70 mb-8">Save your favorite luxury items to your wishlist.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gold font-serif">Wishlist</h1>
        <p className="text-ivory/70">{wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300 group"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 backdrop-blur-sm transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gold mb-2">{item.name}</h3>
              <p className="text-ivory/70 text-sm mb-3">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gold">
                  ${item.price.toLocaleString()}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="flex items-center space-x-2 bg-gold/20 hover:bg-gold/30 text-gold px-4 py-2 rounded-lg transition-colors"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;