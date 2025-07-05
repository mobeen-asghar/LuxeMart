import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';
import { validateEmail } from '../utils/auth';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    setIsSubmitted(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gold/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-12 border border-gold/20">
            <Mail className="h-16 w-16 text-gold mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-gold font-serif mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl text-ivory/80 mb-8 max-w-2xl mx-auto">
              Be the first to know about new arrivals, exclusive collections, and special events. 
              Join our exclusive circle of luxury enthusiasts.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setIsValid(true);
                      }}
                      className={`w-full px-6 py-4 rounded-lg bg-black/50 border ${
                        isValid ? 'border-gold/30' : 'border-red-500'
                      } text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors`}
                      required
                    />
                    {!isValid && (
                      <p className="text-red-400 text-sm mt-2">Please enter a valid email address</p>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center space-x-2 text-green-400"
              >
                <CheckCircle className="h-8 w-8" />
                <span className="text-xl font-semibold">Successfully subscribed!</span>
              </motion.div>
            )}

            <p className="text-sm text-ivory/50 mt-6">
              By subscribing, you agree to receive our newsletter and marketing communications. 
              You can unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;