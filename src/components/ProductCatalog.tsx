import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Filter, Search } from 'lucide-react';
import productsData from '../data/products.json';
import { getCartItems, setCartItems, getWishlistItems, setWishlistItems } from '../utils/storage';

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [cart, setCart] = useState(getCartItems());
  const [wishlist, setWishlist] = useState(getWishlistItems());

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const maxPrice = Math.max(...products.map(p => p.price));

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy, priceRange, products]);

  const addToCart = (product: any) => {
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
    
    setCart(newCart);
    setCartItems(newCart);
  };

  const toggleWishlist = (product: any) => {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    let newWishlist;
    
    if (isInWishlist) {
      newWishlist = wishlist.filter(item => item.id !== product.id);
    } else {
      newWishlist = [...wishlist, product];
    }
    
    setWishlist(newWishlist);
    setWishlistItems(newWishlist);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-gold fill-current' : 'text-gold/30'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold text-gold font-serif">Product Catalog</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-ivory/50" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-black/50 border border-gold/30 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 rounded-2xl p-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gold" />
            <span className="text-ivory/80 font-medium">Filters:</span>
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-black/50 border border-gold/30 rounded-lg text-ivory focus:outline-none focus:border-gold"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-black/50 border border-gold/30 rounded-lg text-ivory focus:outline-none focus:border-gold"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          <div className="flex items-center space-x-2">
            <span className="text-ivory/70">Price Range:</span>
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-20"
            />
            <span className="text-ivory/70">${priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300 group"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors ${
                  wishlist.some(item => item.id === product.id)
                    ? 'bg-gold/20 text-gold'
                    : 'bg-black/50 text-ivory/70 hover:text-gold'
                }`}
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gold mb-2">{product.name}</h3>
              <p className="text-ivory/70 text-sm mb-3">{product.description}</p>
              
              <div className="flex items-center justify-between mb-3">
                {renderStars(product.rating)}
                <span className="text-ivory/60 text-sm">({product.rating})</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gold">
                  ${product.price.toLocaleString()}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center space-x-2 bg-gold/20 hover:bg-gold/30 text-gold px-4 py-2 rounded-lg transition-colors"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-ivory/60 text-lg">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;