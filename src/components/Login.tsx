import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Crown, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword, authenticateUser, setCurrentUser } from '../utils/auth';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '', general: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = { email: '', password: '', general: '' };
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }
    
    const user = authenticateUser(formData.email, formData.password);
    if (user) {
      setCurrentUser(user);
      navigate('/dashboard');
    } else {
      setErrors({ ...newErrors, general: 'Invalid email or password' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black/95 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <Crown className="h-12 w-12 text-gold" />
          </div>
          <h2 className="text-4xl font-bold text-gold font-serif">Welcome Back</h2>
          <p className="mt-2 text-ivory/80">Sign in to your luxury account</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-8"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {errors.general && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                <p className="text-red-400 text-sm">{errors.general}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-ivory/80 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-ivory/50" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gold/30'
                  } rounded-lg bg-black/50 text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors`}
                  placeholder="Enter your email"
                  required
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-ivory/80 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-ivory/50" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 border ${
                    errors.password ? 'border-red-500' : 'border-gold/30'
                  } rounded-lg bg-black/50 text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-ivory/50" />
                  ) : (
                    <Eye className="h-5 w-5 text-ivory/50" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-red-400 text-sm">{errors.password}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 px-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              Sign In
            </motion.button>

            <div className="text-center">
              <p className="text-ivory/70">
                Don't have an account?{' '}
                <Link to="/signup" className="text-gold hover:text-gold/80 transition-colors">
                  Create Account
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8 border-t border-gold/20 pt-6">
            <h3 className="text-ivory/80 text-sm font-medium mb-3">Demo Accounts:</h3>
            <div className="space-y-2 text-xs text-ivory/60">
              <p>john@example.com / password123</p>
              <p>sarah@example.com / password123</p>
              <p>michael@example.com / password123</p>
              <p>emma@example.com / password123</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;