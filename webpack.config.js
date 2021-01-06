const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'date-fns-umd.js',
    library: 'date_fns',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
};