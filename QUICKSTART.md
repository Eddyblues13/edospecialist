# Quick Start Guide

## Getting Started

1. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

2. **Build Tailwind CSS (optional - CDN is used by default):**
   ```bash
   npm run build:css
   ```
   
   For production:
   ```bash
   npm run build:css:prod
   ```

3. **Start the server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000`

## Pages Available

- `http://localhost:3000/` - Homepage
- `http://localhost:3000/about` - About Us
- `http://localhost:3000/services` - Services
- `http://localhost:3000/education` - Education & Training
- `http://localhost:3000/doctors` - Medical Team
- `http://localhost:3000/news` - News & Updates
- `http://localhost:3000/contact` - Contact Us

**Note:** All URLs work without `.html` extension!

## Features

✅ Clean URLs (no .html extension)  
✅ Responsive design  
✅ Component-based architecture  
✅ Interactive JavaScript features  
✅ Appointment booking system  
✅ Scroll animations  
✅ Mobile-friendly navigation  

## Project Structure

- `pages/` - All HTML pages
- `components/` - Reusable header and footer
- `assets/js/` - JavaScript files
- `assets/css/` - Compiled CSS
- `styles/` - Tailwind source files
- `server.js` - Express server for routing

## Customization

Edit the Tailwind config in `tailwind.config.js` to customize colors and theme.

