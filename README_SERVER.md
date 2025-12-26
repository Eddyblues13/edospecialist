# Server Setup Instructions

## Running the Server

1. Make sure Node.js is installed
2. Install dependencies (if any): `npm install`
3. Start the server: `node server.js`
4. Open your browser to: `http://localhost:3000`

## Important Notes

- **DO NOT** open HTML files directly in the browser (file:// protocol)
- Always access pages through the server at `http://localhost:3000`
- The server handles routing and serves static files correctly

## File Paths

All JavaScript files are served from `/assets/js/`:
- `/assets/js/mobile-nav.js` - Mobile navigation functionality
- `/assets/js/main.js` - Main site functionality

## Troubleshooting

If you see "Failed to load resource" errors:
1. Make sure the server is running (`node server.js`)
2. Access pages through `http://localhost:3000` not `file://`
3. Check that files exist in `assets/js/` directory
