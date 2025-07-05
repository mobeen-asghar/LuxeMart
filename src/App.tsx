import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';
import Reviews from './components/Reviews';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Pricing from './components/Pricing';
import ProductCatalog from './components/ProductCatalog';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import UserSettings from './components/UserSettings';

const HomePage: React.FC = () => (
  <div className="bg-black">
    <Hero />
    <Categories />
    <Newsletter />
    <Reviews />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-ivory">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/catalog" element={<div className="py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><ProductCatalog /></div></div>} />
          <Route path="/cart" element={<div className="py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><Cart /></div></div>} />
          <Route path="/wishlist" element={<div className="py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><Wishlist /></div></div>} />
          <Route path="/settings" element={<div className="py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><UserSettings /></div></div>} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;