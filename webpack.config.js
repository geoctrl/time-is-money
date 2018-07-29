const path = require('path');

const config = {};
config.mode = 'development';
config.entry = path.resolve(__dirname, 'src/index.js'),
config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'src/index.js'),
}

config.resolve = {
  alias: {
    vue: 'vue/dist/vue.js',
  },
};

config.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread'
          ],
        },  
      },
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'fast-sass-loader'],
    }
  ],
}


module.exports = config;