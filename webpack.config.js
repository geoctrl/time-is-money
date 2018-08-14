const { resolve } = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

const config = {};
config.mode = 'development';
config.entry = resolve(__dirname, 'src/index.js');
config.output = {
  filename: 'bundle.js',
  path: resolve(__dirname, 'src/'),
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
          data: `@import "~/${resolve(__dirname, 'src/styles/variables.scss')}";
            @import "~/${resolve(__dirname, 'src/styles/utils.scss')}";`,
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

config.serve = {
  port: 8080,
  content: [resolve(__dirname, 'src')],
  add: (app, middleware, options) => {
    app.use(convert(history({})));
  },
};

module.exports = config;