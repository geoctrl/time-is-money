const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {};
config.mode = 'development';
config.entry = path.resolve(__dirname, 'src/index.js');
config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'src/'),
};

config.module = {
  rules: [
    {
      test: /\.vue/,
      exclude: /node_modules/,
      use: 'vue-loader',
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['vue-style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          data: `@import "~/${path.resolve(__dirname, 'src/styles/variables.scss')}";`,
        },
      }],
    },
    {
      test: /\.svg$/,
      exclude: /node_modules/,
      use: 'raw-loader',
    },
  ],
};

config.plugins = [];
config.plugins.push(new VueLoaderPlugin());

module.exports = config;