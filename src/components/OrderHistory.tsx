import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { mockOrders } from '../data/mockData';
import { getCurrentUser } from '../utils/auth';

const OrderHistory: React.FC = () => {
  const currentUser = getCurrentUser();
  const userOrders = mockOrders.filter(order => order.userId === currentUser?.id);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Clock className="h-5 w-5 text-yellow-400" />;
      case 'Shipped':
        return <Truck className="h-5 w-5 text-blue-400" />;
      case 'Delivered':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      default:
        return <Package className="h-5 w-5 text-ivory/50" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'text-yellow-400';
      case 'Shipped':
        return 'text-blue-400';
      case 'Delivered':
        return 'text-green-400';
      default:
        return 'text-ivory/50';
    }
  };

  if (userOrders.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="h-24 w-24 text-gold/30 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gold mb-4">No Orders Yet</h2>
        <p className="text-ivory/70 mb-8">Your luxury purchases will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gold font-serif">Order History</h1>

      <div className="space-y-4">
        {userOrders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  {getStatusIcon(order.status)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gold">Order #{order.id}</h3>
                  <p className="text-ivory/70">{order.date}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 mt-4 lg:mt-0">
                <div className="text-right">
                  <p className="text-sm text-ivory/60">Status</p>
                  <p className={`font-semibold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-ivory/60">Total</p>
                  <p className="text-xl font-bold text-gold">
                    ${order.total.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-ivory/60">Items:</p>
              {order.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-between items-center">
                  <span className="text-ivory/80">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="text-gold">
                    ${(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {order.trackingNumber && (
              <div className="mt-4 pt-4 border-t border-gold/20">
                <p className="text-sm text-ivory/60">
                  Tracking: <span className="text-gold">{order.trackingNumber}</span>
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;