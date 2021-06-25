const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.ejs'),
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    port: 4000,
  },
};
