# Edo Specialist Hospital Website

A modern, responsive website for Edo Specialist Hospital - a premier teaching hospital in Nigeria. Built with HTML, Tailwind CSS, and JavaScript.

## Features

- ✅ Multi-page website with clean URLs (no .html extension)
- ✅ Responsive design for all devices
- ✅ Modern UI with Tailwind CSS
- ✅ Interactive components and animations
- ✅ Appointment booking system
- ✅ Separate pages for different sections
- ✅ Component-based architecture
- ✅ Optimized performance

## Project Structure

```
edospecialist/
├── index.html          # Homepage (root)
├── about/              # About page folder
│   └── index.html
├── services/           # Services page folder
│   └── index.html
├── education/          # Education page folder
│   └── index.html
├── doctors/            # Doctors page folder
│   └── index.html
├── news/               # News page folder
│   └── index.html
├── contact/            # Contact page folder
│   └── index.html
├── partials/           # Reusable partials
│   ├── header.html     # Navigation header
│   └── footer.html     # Footer component
├── assets/             # Static assets
│   ├── css/            # Compiled CSS
│   ├── js/             # JavaScript files
│   └── images/         # Image files
├── styles/             # Source CSS files
│   └── input.css       # Tailwind input file
├── scripts/            # Build scripts
├── server.js           # Express server
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
└── README.md           # This file
```

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build Tailwind CSS:**
   ```bash
   npm run build:css
   ```
   
   For production (minified):
   ```bash
   npm run build:css:prod
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## Usage

### Development

Run the development server:
```bash
npm run dev
```

The server will start on port 3000 (or the port specified in the PORT environment variable).

### Building for Production

1. Build the CSS:
   ```bash
   npm run build:css:prod
   ```

2. The server is ready to deploy. You can use:
   - The included Express server
   - Any static file server (after building)
   - Deploy to platforms like Vercel, Netlify, etc.

## Pages

- `/` - Homepage (root index.html)
- `/about` - About Us (about/index.html)
- `/services` - Our Services (services/index.html)
- `/education` - Medical Education & Training (education/index.html)
- `/doctors` - Our Medical Team (doctors/index.html)
- `/news` - News & Updates (news/index.html)
- `/contact` - Contact Us (contact/index.html)

All pages are accessible without the `.html` extension thanks to the Express server routing. Each page has its own folder with an `index.html` file for better organization.

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Interactive functionality
- **Express.js** - Server for clean URLs
- **Font Awesome** - Icons

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your primary colors
  }
}
```

### Partials

Reusable partials are in the `partials/` directory:
- `header.html` - Navigation header
- `footer.html` - Footer

These are loaded dynamically into each page using JavaScript fetch.

### Styles

Main styles are in `styles/input.css`. Custom Tailwind utilities can be added here.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Edo Specialist Hospital.

## Support

For issues or questions, please contact the development team.

