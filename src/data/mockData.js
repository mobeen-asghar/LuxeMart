export const mockUsers = [
  {
    id: 1,
    email: "john@example.com",
    password: "password123",
    name: "John Doe",
    address: "123 Luxury Ave, Beverly Hills, CA 90210",
    phone: "+1 (555) 123-4567",
    paymentMethod: {
      type: "credit",
      cardNumber: "**** **** **** 1234",
      expiryDate: "12/25",
      cardholderName: "John Doe"
    },
    cart: [],
    wishlist: [],
    orders: [],
    preferences: {
      emailNotifications: true,
      smsNotifications: false,
      dataSharing: false
    }
  },
  {
    id: 2,
    email: "sarah@example.com",
    password: "password123",
    name: "Sarah Johnson",
    address: "456 Elite St, Manhattan, NY 10001",
    phone: "+1 (555) 987-6543",
    paymentMethod: {
      type: "credit",
      cardNumber: "**** **** **** 5678",
      expiryDate: "03/26",
      cardholderName: "Sarah Johnson"
    },
    cart: [],
    wishlist: [],
    orders: [],
    preferences: {
      emailNotifications: true,
      smsNotifications: true,
      dataSharing: true
    }
  },
  {
    id: 3,
    email: "michael@example.com",
    password: "password123",
    name: "Michael Chen",
    address: "789 Premium Blvd, San Francisco, CA 94102",
    phone: "+1 (555) 456-7890",
    paymentMethod: {
      type: "credit",
      cardNumber: "**** **** **** 9012",
      expiryDate: "08/25",
      cardholderName: "Michael Chen"
    },
    cart: [],
    wishlist: [],
    orders: [],
    preferences: {
      emailNotifications: false,
      smsNotifications: true,
      dataSharing: false
    }
  },
  {
    id: 4,
    email: "emma@example.com",
    password: "password123",
    name: "Emma Wilson",
    address: "321 Opulent Dr, Miami, FL 33101",
    phone: "+1 (555) 234-5678",
    paymentMethod: {
      type: "credit",
      cardNumber: "**** **** **** 3456",
      expiryDate: "06/27",
      cardholderName: "Emma Wilson"
    },
    cart: [],
    wishlist: [],
    orders: [],
    preferences: {
      emailNotifications: true,
      smsNotifications: false,
      dataSharing: true
    }
  }
];

export const mockOrders = [
  {
    id: "ORD001",
    userId: 1,
    date: "2024-01-15",
    status: "Delivered",
    total: 13200,
    items: [
      { id: 1, name: "Rolex Submariner", price: 8500, quantity: 1 },
      { id: 2, name: "Diamond Necklace", price: 12000, quantity: 1 }
    ],
    trackingNumber: "TRK123456789"
  },
  {
    id: "ORD002",
    userId: 1,
    date: "2024-01-20",
    status: "Processing",
    total: 2650,
    items: [
      { id: 6, name: "Christian Louboutin Heels", price: 1200, quantity: 1 },
      { id: 19, name: "Hermès Scarf", price: 450, quantity: 1 }
    ],
    trackingNumber: "TRK987654321"
  },
  {
    id: "ORD003",
    userId: 2,
    date: "2024-01-18",
    status: "Shipped",
    total: 33500,
    items: [
      { id: 3, name: "Hermès Birkin Bag", price: 25000, quantity: 1 },
      { id: 1, name: "Rolex Submariner", price: 8500, quantity: 1 }
    ],
    trackingNumber: "TRK456789123"
  },
  {
    id: "ORD004",
    userId: 3,
    date: "2024-01-12",
    status: "Delivered",
    total: 950,
    items: [
      { id: 15, name: "Manolo Blahnik Pumps", price: 950, quantity: 1 }
    ],
    trackingNumber: "TRK789123456"
  },
  {
    id: "ORD005",
    userId: 4,
    date: "2024-01-25",
    status: "Processing",
    total: 18450,
    items: [
      { id: 5, name: "Tiffany Engagement Ring", price: 18000, quantity: 1 },
      { id: 10, name: "Gucci Sunglasses", price: 450, quantity: 1 }
    ],
    trackingNumber: "TRK321654987"
  }
];

export const mockReviews = [
  {
    id: 1,
    productId: 1,
    userName: "Alexander M.",
    rating: 5,
    comment: "Absolutely stunning timepiece. The quality is exceptional and the craftsmanship is impeccable.",
    date: "2024-01-10",
    verified: true
  },
  {
    id: 2,
    productId: 2,
    userName: "Victoria S.",
    rating: 5,
    comment: "Breathtaking necklace. The diamonds are brilliant and the setting is perfect.",
    date: "2024-01-08",
    verified: true
  },
  {
    id: 3,
    productId: 3,
    userName: "Catherine L.",
    rating: 5,
    comment: "The holy grail of handbags. Worth every penny. Exquisite craftsmanship.",
    date: "2024-01-12",
    verified: true
  },
  {
    id: 4,
    productId: 4,
    userName: "James R.",
    rating: 5,
    comment: "A masterpiece of horological art. The movement is sublime.",
    date: "2024-01-05",
    verified: true
  },
  {
    id: 5,
    productId: 5,
    userName: "Isabella C.",
    rating: 5,
    comment: "Perfect engagement ring. The diamond is flawless and the setting is elegant.",
    date: "2024-01-15",
    verified: true
  },
  {
    id: 6,
    productId: 6,
    userName: "Sophia W.",
    rating: 4,
    comment: "Beautiful shoes, though they run slightly small. The quality is outstanding.",
    date: "2024-01-18",
    verified: true
  },
  {
    id: 7,
    productId: 7,
    userName: "Charlotte B.",
    rating: 5,
    comment: "Timeless fragrance. The scent is sophisticated and long-lasting.",
    date: "2024-01-20",
    verified: true
  },
  {
    id: 8,
    productId: 8,
    userName: "Benjamin F.",
    rating: 4,
    comment: "Excellent wallet with beautiful monogram. Very practical and stylish.",
    date: "2024-01-22",
    verified: true
  },
  {
    id: 9,
    productId: 9,
    userName: "Olivia H.",
    rating: 5,
    comment: "Iconic bracelet. The gold is beautiful and the design is timeless.",
    date: "2024-01-25",
    verified: true
  },
  {
    id: 10,
    productId: 10,
    userName: "William T.",
    rating: 4,
    comment: "Stylish sunglasses with excellent UV protection. Great for everyday wear.",
    date: "2024-01-28",
    verified: true
  }
];

export const categories = [
  { id: 1, name: "Watches", icon: "Watch", image: "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { id: 2, name: "Jewelry", icon: "Gem", image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { id: 3, name: "Handbags", icon: "ShoppingBag", image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { id: 4, name: "Shoes", icon: "Shirt", image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { id: 5, name: "Perfumes", icon: "Sparkles", image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { id: 6, name: "Accessories", icon: "Crown", image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300" }
];

export const pricingTiers = [
  {
    id: 1,
    name: "Standard",
    price: 0,
    features: [
      "Basic access to catalog",
      "Standard shipping",
      "Email support",
      "Basic wishlist"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: 299,
    features: [
      "Priority access to new arrivals",
      "Free expedited shipping",
      "24/7 phone support",
      "Advanced wishlist features",
      "Exclusive member events",
      "Personal stylist consultation"
    ],
    popular: true
  },
  {
    id: 3,
    name: "VIP",
    price: 999,
    features: [
      "First access to limited editions",
      "White-glove delivery service",
      "Dedicated account manager",
      "Unlimited returns",
      "Private showroom access",
      "Custom jewelry design",
      "Investment portfolio tracking"
    ],
    popular: false
  }
];