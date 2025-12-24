# Project Structure Guide

## Folder Organization

The project is organized with each page in its own folder containing an `index.html` file:

```
edospecialist/
├── index.html              # Homepage (accessible at /)
├── about/
│   └── index.html          # About page (accessible at /about)
├── services/
│   └── index.html          # Services page (accessible at /services)
├── education/
│   └── index.html          # Education page (accessible at /education)
├── doctors/
│   └── index.html          # Doctors page (accessible at /doctors)
├── news/
│   └── index.html          # News page (accessible at /news)
├── contact/
│   └── index.html          # Contact page (accessible at /contact)
└── partials/
    ├── header.html         # Navigation header (loaded dynamically)
    └── footer.html         # Footer (loaded dynamically)
```

## Benefits of This Structure

1. **Better Organization**: Each page has its own folder, making it easier to manage page-specific assets
2. **Clean URLs**: URLs work without `.html` extension (e.g., `/about` instead of `/about.html`)
3. **Scalability**: Easy to add page-specific CSS, JS, or images in each folder
4. **Maintainability**: Clear separation of concerns

## How It Works

1. **Server Routing**: The Express server (`server.js`) automatically serves `index.html` from the appropriate folder when you visit a URL like `/about`

2. **Partials Loading**: Each page uses JavaScript to fetch and inject the header and footer from the `partials/` folder

3. **Asset Paths**: All assets (CSS, JS, images) use absolute paths starting with `/assets/` so they work from any page folder

## Adding a New Page

1. Create a new folder (e.g., `newpage/`)
2. Create `index.html` inside that folder
3. Include the header/footer loading script:
   ```javascript
   fetch('/partials/header.html')
       .then(res => res.text())
       .then(html => {
           document.getElementById('header-container').innerHTML = html;
           // Reinitialize functions
       });
   ```
4. The page will be accessible at `/newpage` automatically!

