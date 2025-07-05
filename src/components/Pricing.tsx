import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Star, Zap } from 'lucide-react';
import { pricingTiers } from '../data/mockData';
import { getSelectedPlan, setSelectedPlan } from '../utils/storage';

const Pricing: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState(getSelectedPlan());

  const handleSelectPlan = (planName: string) => {
    setSelectedTier(planName);
    setSelectedPlan(planName);
    alert(`Successfully selected ${planName} plan!`);
  };

  const getTierIcon = (tierId: number) => {
    switch (tierId) {
      case 1:
        return <Star className="h-8 w-8 text-gold" />;
      case 2:
        return <Crown className="h-8 w-8 text-gold" />;
      case 3:
        return <Zap className="h-8 w-8 text-gold" />;
      default:
        return <Star className="h-8 w-8 text-gold" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black/95 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gold font-serif mb-6">
            Membership Tiers
          </h1>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto">
            Choose the perfect membership level for your luxury lifestyle. 
            Each tier offers exclusive benefits and personalized service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-gradient-to-br from-gold/10 to-transparent border-2 rounded-3xl p-8 ${
                tier.popular
                  ? 'border-gold scale-105 shadow-2xl shadow-gold/20'
                  : 'border-gold/20 hover:border-gold/40'
              } transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold text-black px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {getTierIcon(tier.id)}
                </div>
                <h3 className="text-2xl font-bold text-gold font-serif mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-4xl font-bold text-gold">
                    ${tier.price}
                  </span>
                  <span className="text-ivory/60">/year</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-ivory/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectPlan(tier.name)}
                className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                  selectedTier === tier.name
                    ? 'bg-gold/20 text-gold border-2 border-gold'
                    : tier.popular
                    ? 'bg-gold text-black hover:bg-gold/90'
                    : 'bg-gold/10 text-gold border-2 border-gold/30 hover:border-gold hover:bg-gold/20'
                }`}
              >
                {selectedTier === tier.name ? 'Current Plan' : 'Select Plan'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gold/20 to-transparent border border-gold/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gold mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-gold" />
                </div>
                <h4 className="text-ivory font-semibold mb-2">Luxury Authentication</h4>
                <p className="text-ivory/60 text-sm">
                  Every item verified for authenticity by our experts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-gold" />
                </div>
                <h4 className="text-ivory font-semibold mb-2">White Glove Service</h4>
                <p className="text-ivory/60 text-sm">
                  Personalized service from our luxury specialists
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-gold" />
                </div>
                <h4 className="text-ivory font-semibold mb-2">Lifetime Warranty</h4>
                <p className="text-ivory/60 text-sm">
                  Comprehensive protection for your luxury investments
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;