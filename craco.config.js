const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@components/atomic': path.resolve(__dirname, 'src/components/atomic'),
      '@components/integrated': path.resolve(__dirname, 'src/components/integrated'),
      '@components/templates': path.resolve(__dirname, 'src/components/templates'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
};