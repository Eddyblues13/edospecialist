const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/partials', express.static(path.join(__dirname, 'partials')));

// Serve robots.txt and sitemap.xml
app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, 'robots.txt'));
});

app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

// Middleware to serve pages without .html extension
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  res.status(404).send('Homepage not found');
});

app.get('/:page', (req, res, next) => {
  const page = req.params.page;
  
  // Skip if it's a static file request
  if (req.path.includes('.') || req.path.startsWith('/assets') || req.path.startsWith('/partials')) {
    return next();
  }
  
  // Try to serve from page folder (e.g., /about -> about/index.html)
  const folderPath = path.join(__dirname, page, 'index.html');
  if (fs.existsSync(folderPath)) {
    return res.sendFile(folderPath);
  }
  
  // If not found, try root directory
  const rootPath = path.join(__dirname, `${page}.html`);
  if (fs.existsSync(rootPath)) {
    return res.sendFile(rootPath);
  }
  
  next();
});

// Handle 404
app.use((req, res) => {
  const notFoundPath = path.join(__dirname, 'pages', '404.html');
  if (fs.existsSync(notFoundPath)) {
    return res.status(404).sendFile(notFoundPath);
  }
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📁 Serving pages from individual folders (about/, services/, etc.)`);
  console.log(`✨ Clean URLs enabled (no .html extension needed)`);
});

