process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const dotenv = require('dotenv');
const fs = require('fs');

const NODE_ENV = process.env.NODE_ENV;
const dotenvFiles = [
  `.env.${NODE_ENV}.local`,
  `.env.${NODE_ENV}`,
  // Don't include `.env.local` for test environments
  NODE_ENV !== 'test' && `.env.local`,
  `.env`,
].filter(Boolean);

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    dotenv.config({
      path: dotenvFile,
    });
  }
});
