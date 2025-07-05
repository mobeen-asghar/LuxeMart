import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, ShoppingCart, Heart, Package, Settings, LogOut } from 'lucide-react';
import { getCurrentUser, logout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import ProductCatalog from './ProductCatalog';
import Cart from './Cart';
import Wishlist from './Wishlist';
import OrderHistory from './OrderHistory';
import UserSettings from './UserSettings';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('catalog');
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  const tabs = [
    { id: 'catalog', label: 'Catalog', icon: Package },
    { id: 'cart', label: 'Cart', icon: ShoppingCart },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'catalog':
        return <ProductCatalog />;
      case 'cart':
        return <Cart />;
      case 'wishlist':
        return <Wishlist />;
      case 'orders':
        return <OrderHistory />;
      case 'settings':
        return <UserSettings />;
      default:
        return <ProductCatalog />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black/95 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-64 space-y-6"
          >
            {/* User Profile */}
            <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-gold font-semibold">{currentUser.name}</h3>
                  <p className="text-ivory/60 text-sm">{currentUser.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-2 text-ivory/70 hover:text-gold transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-gold/20 text-gold border border-gold/30'
                        : 'text-ivory/70 hover:text-gold hover:bg-gold/10'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;