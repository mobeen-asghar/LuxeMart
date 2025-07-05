import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';
import * as LucideIcons from 'lucide-react';

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gold font-serif mb-6">
            Luxury Categories
          </h2>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto">
            Explore our curated selection of the world's finest luxury goods, 
            each category representing the pinnacle of craftsmanship and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = LucideIcons[category.icon as keyof typeof LucideIcons] as React.ComponentType<any>;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={`/catalog?category=${category.name}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 hover:border-gold/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50"></div>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 mb-4 group-hover:bg-gold/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-gold" />
                        </div>
                        <h3 className="text-2xl font-bold text-gold font-serif group-hover:text-gold/90 transition-colors">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;