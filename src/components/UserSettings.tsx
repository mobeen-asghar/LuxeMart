import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, CreditCard, Bell, Shield, Palette, Save } from 'lucide-react';
import { getCurrentUser, updateUserProfile } from '../utils/auth';
import { getUserPreferences, setUserPreferences, getTheme, setTheme } from '../utils/storage';

const UserSettings: React.FC = () => {
  const currentUser = getCurrentUser();
  const [profile, setProfile] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    address: currentUser?.address || ''
  });
  const [paymentMethod, setPaymentMethod] = useState(currentUser?.paymentMethod || {
    cardNumber: '',
    expiryDate: '',
    cardholderName: ''
  });
  const [preferences, setPreferencesState] = useState(getUserPreferences());
  const [theme, setThemeState] = useState(getTheme());
  const [activeTab, setActiveTab] = useState('profile');

  const handleProfileSave = () => {
    updateUserProfile(profile);
    alert('Profile updated successfully!');
  };

  const handlePaymentSave = () => {
    updateUserProfile({ paymentMethod });
    alert('Payment method updated successfully!');
  };

  const handlePreferencesSave = () => {
    setUserPreferences(preferences);
    alert('Preferences updated successfully!');
  };

  const handleThemeChange = (newTheme: string) => {
    setThemeState(newTheme);
    setTheme(newTheme);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gold">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-ivory/80 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-ivory/80 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-ivory/80 text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-ivory/80 text-sm font-medium mb-2">Address</label>
                <textarea
                  value={profile.address}
                  onChange={(e) => setProfile({...profile, address: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>
            <button
              onClick={handleProfileSave}
              className="flex items-center space-x-2 bg-gold text-black px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors"
            >
              <Save className="h-5 w-5" />
              <span>Save Profile</span>
            </button>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gold">Payment Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-ivory/80 text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  value={paymentMethod.cardNumber}
                  onChange={(e) => setPaymentMethod({...paymentMethod, cardNumber: e.target.value})}
                  placeholder="**** **** **** ****"
                  className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-ivory/80 text-sm font-medium mb-2">Expiry Date</label>
                <input
                  type="text"
                  value={paymentMethod.expiryDate}
                  onChange={(e) => setPaymentMethod({...paymentMethod, expiryDate: e.target.value})}
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-ivory/80 text-sm font-medium mb-2">Cardholder Name</label>
                <input
                  type="text"
                  value={paymentMethod.cardholderName}
                  onChange={(e) => setPaymentMethod({...paymentMethod, cardholderName: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border border-gold/30 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>
            <button
              onClick={handlePaymentSave}
              className="flex items-center space-x-2 bg-gold text-black px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors"
            >
              <Save className="h-5 w-5" />
              <span>Save Payment Method</span>
            </button>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gold">Notification Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-ivory font-medium">Email Notifications</h3>
                  <p className="text-ivory/60 text-sm">Receive updates about orders and promotions</p>
                </div>
                <button
                  onClick={() => setPreferencesState({...preferences, emailNotifications: !preferences.emailNotifications})}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.emailNotifications ? 'bg-gold' : 'bg-gold/20'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-ivory font-medium">SMS Notifications</h3>
                  <p className="text-ivory/60 text-sm">Get text messages for important updates</p>
                </div>
                <button
                  onClick={() => setPreferencesState({...preferences, smsNotifications: !preferences.smsNotifications})}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.smsNotifications ? 'bg-gold' : 'bg-gold/20'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
            <button
              onClick={handlePreferencesSave}
              className="flex items-center space-x-2 bg-gold text-black px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors"
            >
              <Save className="h-5 w-5" />
              <span>Save Preferences</span>
            </button>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gold">Privacy Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-ivory font-medium">Data Sharing</h3>
                  <p className="text-ivory/60 text-sm">Allow sharing of anonymized data for service improvement</p>
                </div>
                <button
                  onClick={() => setPreferencesState({...preferences, dataSharing: !preferences.dataSharing})}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.dataSharing ? 'bg-gold' : 'bg-gold/20'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.dataSharing ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
            <button
              onClick={handlePreferencesSave}
              className="flex items-center space-x-2 bg-gold text-black px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors"
            >
              <Save className="h-5 w-5" />
              <span>Save Privacy Settings</span>
            </button>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gold">Appearance</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-ivory font-medium mb-4">Theme</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleThemeChange('luxury')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      theme === 'luxury'
                        ? 'border-gold bg-gold/20'
                        : 'border-gold/30 hover:border-gold/50'
                    }`}
                  >
                    <div className="w-full h-16 bg-gradient-to-br from-gold/20 to-black rounded mb-2"></div>
                    <span className="text-ivory">Luxury Dark</span>
                  </button>
                  <button
                    onClick={() => handleThemeChange('light')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      theme === 'light'
                        ? 'border-gold bg-gold/20'
                        : 'border-gold/30 hover:border-gold/50'
                    }`}
                  >
                    <div className="w-full h-16 bg-gradient-to-br from-ivory to-gold/20 rounded mb-2"></div>
                    <span className="text-ivory">Light Mode</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gold font-serif">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <nav className="lg:col-span-1 space-y-2">
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

        {/* Settings Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-3 bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-6"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default UserSettings;