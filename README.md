# 🛍️ LuxeMart

**LuxeMart** is a client-side luxury e-commerce platform built with modern web technologies to simulate a high-end shopping experience. Designed for elegance and performance, it showcases premium products in a visually rich interface inspired by exclusive online marketplaces.

> **Note:** All data is static and stored locally. You can integrate your own backend or APIs to extend functionality.

---

## ✨ Features

* 🎨 **Luxury UI/UX** inspired by premium marketplaces
* 🖼️ Product browsing, detailed views, categories, wishlist, and cart
* ⚙️ Local authentication simulation using mock data
* 🧠 Persistent user preferences, cart, and theme settings via `localStorage`
* 🌙 Built-in theme support: "Luxury Dark" (default) and "Light Mode"
* 📱 Fully responsive layout, optimized for all devices
* 🎬 Smooth animations and interactions using Framer Motion

---

## 🧩 Tech Stack

| Area              | Tech                                     |
| ----------------- | ---------------------------------------- |
| **Frontend**      | React (Vite)                             |
| **Styling**       | Tailwind CSS                             |
| **Animations**    | Framer Motion                            |
| **Icons**         | lucide-react                             |
| **Fonts**         | Playfair Display (Headings), Lato (Body) |
| **Data Handling** | Static JSON + `localStorage`             |

---

## 📁 Data & Storage

* **Static Data Files**

  * Product listings: `src/data/products.json`
  * User profiles, orders, reviews: `src/data/mockData.js`

* **Storage Utilities**

  * Cart, wishlist, preferences: `localStorage` handled by `src/utils/storage.js`
  * Simulated auth: Email/password validation and session stored using `src/utils/auth.js`

---

## 🎨 Design Highlights

* **Color Palette:**
  Gold `#D4AF37`, Black `#0A0A0A`, Ivory `#F9F1E7`

* **Typography:**

  * *Headings:* Playfair Display (Elegant Serif)
  * *Body Text:* Lato (Modern Sans-Serif)

* **Global Styling:**
  Defined in `src/index.css`, including:

  * Custom scrollbar
  * Smooth transitions & hover effects
  * Keyframe animations (`fadeIn`, `slideIn`)
  * CSS variables for theme switching

---

## 📱 Responsive Design

Built mobile-first with full responsiveness using Tailwind's responsive utility classes. LuxeMart adapts seamlessly across desktops, tablets, and mobile devices.

---

## 🔧 Customization

You can:

* Replace static data with a real API/backend
* Extend authentication and user management
* Integrate payment providers or inventory systems
* Modify themes, animations, or fonts to suit your brand

---

## 📌 Disclaimer

This project is a **frontend-only simulation** of a luxury e-commerce site. No backend or API is connected by default. It's ideal for demos, prototyping, or educational purposes.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/mobeen-asghar/LuxeMart.git
cd LuxeMart

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📄 License

[MIT](LICENSE)