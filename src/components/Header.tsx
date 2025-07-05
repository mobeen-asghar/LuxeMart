import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Crown, ShoppingCart, Heart, User, Menu, X, Search } from 'lucide-react';
import { getCurrentUser, logout } from '../utils/auth';
import { getCartItems } from '../utils/storage';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const cartItems = getCartItems();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-gold" />
            <span className="text-2xl font-bold text-gold font-serif">LuxeMart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-ivory hover:text-gold transition-colors duration-200">
              Home
            </Link>
            <Link to="/catalog" className="text-ivory hover:text-gold transition-colors duration-200">
              Catalog
            </Link>
            <Link to="/pricing" className="text-ivory hover:text-gold transition-colors duration-200">
              Pricing
            </Link>
            {currentUser && (
              <Link to="/dashboard" className="text-ivory hover:text-gold transition-colors duration-200">
                Dashboard
              </Link>
            )}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-ivory/50" />
              <input
                type="text"
                placeholder="Search luxury items..."
                className="bg-black/50 border border-gold/30 rounded-lg pl-10 pr-4 py-2 text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-ivory hover:text-gold transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline">{currentUser.name}</span>
                </button>
                
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-gold/20 rounded-lg shadow-lg"
                    >
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-ivory hover:text-gold hover:bg-gold/10 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-ivory hover:text-gold hover:bg-gold/10 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-ivory hover:text-gold hover:bg-gold/10 transition-colors"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-ivory hover:text-gold transition-colors duration-200"
              >
                Login
              </Link>
            )}

            <Link to="/wishlist" className="text-ivory hover:text-gold transition-colors duration-200">
              <Heart className="h-5 w-5" />
            </Link>

            <Link to="/cart" className="relative text-ivory hover:text-gold transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-ivory hover:text-gold transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gold/20 py-4"
            >
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-ivory hover:text-gold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/catalog"
                  className="text-ivory hover:text-gold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Catalog
                </Link>
                <Link
                  to="/pricing"
                  className="text-ivory hover:text-gold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                {currentUser && (
                  <Link
                    to="/dashboard"
                    className="text-ivory hover:text-gold transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;