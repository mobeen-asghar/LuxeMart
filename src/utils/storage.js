export const getCartItems = () => {
  const cartStr = localStorage.getItem('cart');
  return cartStr ? JSON.parse(cartStr) : [];
};

export const setCartItems = (items) => {
  localStorage.setItem('cart', JSON.stringify(items));
};

export const getWishlistItems = () => {
  const wishlistStr = localStorage.getItem('wishlist');
  return wishlistStr ? JSON.parse(wishlistStr) : [];
};

export const setWishlistItems = (items) => {
  localStorage.setItem('wishlist', JSON.stringify(items));
};

export const getTheme = () => {
  return localStorage.getItem('theme') || 'luxury';
};

export const setTheme = (theme) => {
  localStorage.setItem('theme', theme);
};

export const getUserPreferences = () => {
  const prefsStr = localStorage.getItem('userPreferences');
  return prefsStr ? JSON.parse(prefsStr) : {
    emailNotifications: true,
    smsNotifications: false,
    dataSharing: false
  };
};

export const setUserPreferences = (prefs) => {
  localStorage.setItem('userPreferences', JSON.stringify(prefs));
};

export const getSelectedPlan = () => {
  return localStorage.getItem('selectedPlan') || 'Standard';
};

export const setSelectedPlan = (plan) => {
  localStorage.setItem('selectedPlan', plan);
};