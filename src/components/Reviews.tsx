import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield } from 'lucide-react';
import { mockReviews } from '../data/mockData';

const Reviews: React.FC = () => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-gold fill-current' : 'text-gold/30'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gold font-serif mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto">
            Hear from our distinguished clientele about their luxury shopping experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-6 hover:border-gold/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                {renderStars(review.rating)}
                {review.verified && (
                  <div className="flex items-center space-x-1 text-green-400">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm">Verified</span>
                  </div>
                )}
              </div>
              
              <p className="text-ivory/90 mb-4 leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gold font-semibold">{review.userName}</p>
                  <p className="text-ivory/50 text-sm">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-gold/20 to-transparent border border-gold/20 rounded-2xl px-8 py-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-gold">4.8</p>
              <p className="text-ivory/70">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gold">1,247</p>
              <p className="text-ivory/70">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gold">99%</p>
              <p className="text-ivory/70">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;