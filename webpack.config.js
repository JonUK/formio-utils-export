const {resolve} = require('path');

module.exports = {
  mode: "development",
  entry: {
    'index': './testCalculator.js',
    'formiojsUtils': './formiojsUtils.js'
  },
  experiments: {
    outputModule: true
  },
  output: {
    path: resolve(__dirname, './dist'),
    libraryTarget: 'module',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { modules: false }]
            ]
          },
        },
      },
    ],
  },
};
