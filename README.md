# Multi-Store E-Commerce Website

A responsive, multi-page e-commerce website built with vanilla HTML5, CSS3, and JavaScript. This project demonstrates modern web development practices including responsive design, dynamic content rendering, form validation, and user interaction handling.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Project Overview

This multi-store e-commerce platform provides a complete shopping experience with product browsing, shopping cart functionality, user registration, and checkout process. Built entirely with vanilla JavaScript (no frameworks), this project showcases fundamental web development skills and best practices.

**Academic Context:** Completed as part of the Web Development module at CCT College Dublin (2025)

## Key Features

### Core Functionality
- **Product Catalog** - Browse multiple product categories with filtering and search
- **Shopping Cart** - Add/remove items, update quantities, view cart total
- **User Registration** - Form validation and user account creation
- **Checkout Process** - Multi-step checkout with order summary
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dynamic Content** - JavaScript-powered content rendering without page reload
- **Form Validation** - Client-side validation for all user inputs
- **Local Storage** - Cart persistence across sessions

### User Experience Features
- Modern, clean UI/UX design
- Smooth animations and transitions
- Interactive product galleries
- Real-time price calculations
- Search functionality with live filtering
- Accessibility-compliant semantic HTML
- SEO-optimized structure

## Technologies Used

- **HTML5** - Semantic markup, modern HTML features
- **CSS3** - Flexbox, Grid, animations, transitions, media queries
- **JavaScript (ES6+)** - DOM manipulation, event handling, local storage
- **Git** - Version control
- **Responsive Design** - Mobile-first approach

### No External Dependencies
This project intentionally uses **vanilla JavaScript** (no jQuery, React, or other frameworks) to demonstrate:
- Core JavaScript fundamentals
- DOM manipulation skills
- Event handling
- Asynchronous programming concepts
- Browser API usage

## Live Project

https://mlojaeletro.com.br/

## Design Features

### Responsive Layouts

**Desktop (> 1024px)**
- Multi-column product grid (4 columns)
- Full-width navigation with dropdown menus
- Sidebar filters and categories
- Large product images with hover effects

**Tablet (768px - 1024px)**
- 2-3 column product grid
- Collapsible navigation menu
- Responsive images
- Touch-optimized interactions

**Mobile (< 768px)**
- Single column layout
- Hamburger menu navigation
- Full-width product cards
- Bottom-fixed cart button
- Optimized touch targets

### CSS Architecture

```css
/* Mobile-first approach */
/* Base styles for mobile */
.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

/* Tablet */
@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Color Scheme & Typography

**Primary Palette:**
- Primary Color: `#3498db` (Blue)
- Secondary Color: `#2ecc71` (Green)
- Accent Color: `#e74c3c` (Red)
- Background: `#f5f5f5` (Light Gray)
- Text: `#333333` (Dark Gray)

**Typography:**
- Headers: 'Roboto', sans-serif
- Body: 'Open Sans', sans-serif
- Monospace: 'Courier New', monospace (for code/prices)

## Core JavaScript Functionality

### 1. Product Catalog Management

```javascript
// Product data structure
const products = [
  {
    id: 1,
    name: "Product Name",
    category: "Electronics",
    price: 299.99,
    image: "images/products/product1.jpg",
    description: "Product description...",
    inStock: true
  },
  // ... more products
];

// Display products dynamically
function displayProducts(productArray) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';
  
  productArray.forEach(product => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

// Create product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p class="price">$${product.price.toFixed(2)}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  return card;
}
```

### 2. Form Validation

```javascript
// Email validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password validation (min 8 chars, 1 uppercase, 1 number)
function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

// Form submission handler
function handleRegistration(event) {
  event.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    password: document.getElementById('password').value,
    confirmPassword: document.getElementById('confirm-password').value
  };
  
  // Validate all fields
  const errors = [];
  
  if (formData.name.length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  
  if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!validatePassword(formData.password)) {
    errors.push('Password must be 8+ characters with uppercase and number');
  }
  
  if (formData.password !== formData.confirmPassword) {
    errors.push('Passwords do not match');
  }
  
  if (errors.length > 0) {
    displayErrors(errors);
    return false;
  }
  
  // If validation passes
  registerUser(formData);
}

// Display validation errors
function displayErrors(errors) {
  const errorContainer = document.getElementById('error-messages');
  errorContainer.innerHTML = errors.map(error => 
    `<p class="error">${error}</p>`
  ).join('');
}
```

## Responsive Design Examples

### Breakpoints Used

```css
/* Mobile First Base Styles */
/* Default: 320px - 767px */

/* Small Tablets */
@media (min-width: 576px) {
  /* Styles for small tablets */
}

/* Tablets */
@media (min-width: 768px) {
  /* Styles for tablets */
}

/* Desktops */
@media (min-width: 1024px) {
  /* Styles for desktops */
}

/* Large Desktops */
@media (min-width: 1440px) {
  /* Styles for large desktops */
}
```

## Performance Optimizations

- **Image Optimization:** Compressed images, proper formats (WebP with fallbacks)
- **CSS Minification:** Minified CSS for production
- **JavaScript Bundling:** Combined and minified JS files
- **Lazy Loading:** Images loaded as needed
- **Caching Strategy:** Browser caching for static assets
- **Minimal HTTP Requests:** Combined resources where possible

## Accessibility Features

- Semantic HTML5 elements for screen readers
- ARIA labels for interactive elements
- Proper heading hierarchy (h1 → h6)
- Keyboard navigation support
- Focus indicators for interactive elements
- Alt text for all images
- Sufficient color contrast ratios (WCAG AA compliant)
- Skip navigation links

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

## Future Enhancements

Potential features for future versions:

- [ ] Backend integration (Node.js/Express API)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication with JWT
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Product reviews and ratings system
- [ ] Wishlist functionality
- [ ] Order history tracking
- [ ] Email notifications
- [ ] Admin dashboard for product management
- [ ] Advanced search with autocomplete
- [ ] Product recommendations
- [ ] Multi-currency support
- [ ] Internationalization (i18n)
- [ ] PWA (Progressive Web App) features
- [ ] Real-time inventory updates


## 💻 Installation & Setup

### Option 1: Simple Setup
```bash
# Clone the repository
git clone https://github.com/ravalenr/Multi_Store_Website_Project.git

# Navigate to project directory
cd Multi_Store_Website_Project

# Open index.html in your browser
open index.html
```

### Option 2: Local Server (Recommended)
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000

# Then open: http://localhost:8000
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Contributing

This is an educational project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## Learning Resources

Resources used while building this project:

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript reference
- [CSS Tricks](https://css-tricks.com/) - CSS techniques and best practices
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [W3C Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - WCAG standards

## Author

**Rafael Valentim Ribeiro**
- GitHub: [@ravalenr](https://github.com/ravalenr)
- LinkedIn: [raphahribs](https://www.linkedin.com/in/raphahribs/)
- Email: raphahribs@icloud.com

## Academic Information

- **Institution:** CCT College Dublin
- **Programme:** Higher Diploma in Computing
- **Module:** Web Development
- **Date:** 2025

## License

This project is created for educational purposes as part of academic coursework.

## Acknowledgments

- CCT College Dublin for web development training
- MDN Web Docs for comprehensive documentation
- The web development community for inspiration and best practices

---

⭐ **If you found this project helpful, please consider giving it a star!**

💼 **Recruiters:** This project demonstrates my ability to build responsive, interactive web applications using vanilla JavaScript. It showcases my understanding of front-end development fundamentals, DOM manipulation, event handling, and modern web development best practices. I'm available for Software Engineering opportunities.

📧 **Contact:** For questions about this project or collaboration opportunities, feel free to reach out via email or LinkedIn.
