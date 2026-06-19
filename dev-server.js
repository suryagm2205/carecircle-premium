import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Import serverless API handlers
import companionHandler from './api/companion.js';
import triageHandler from './api/triage.js';
import otpHandler from './api/otp.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Serve static built files from dist/
app.use(express.static(path.join(__dirname, 'dist'), {
  etag: false,
  maxAge: 0,
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');
  }
}));

// Mount serverless endpoints
app.post('/api/companion', companionHandler);
app.post('/api/triage', triageHandler);
app.post('/api/otp', otpHandler);

// Options/CORS support for pre-flight checks
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.end();
});

// Fallback to index.html for Single-Page Application routing
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`\n==================================================================`);
    console.log(`CareCircle Elite Secure Local Server running at:`);
    console.log(`👉 http://localhost:${port}`);
    console.log(`==================================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use. Trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
};

startServer(parseInt(process.env.PORT || 3000, 10));
