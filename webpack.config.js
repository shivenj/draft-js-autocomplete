const path = require('path');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const src = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        include: src,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
      },
      {
        test: /\.jsx?$/,
        include: src,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
          },
        }
      }
    ]
  },
  externals: {
    // Don't bundle peer dependencies
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes"
    },
    "draft-js": {
      commonjs: "draft-js",
      commonjs2: "draft-js",
      amd: "draft-js",
      root: "draft-js"
    },
    "draft-js-multidecorators": {
      commonjs: "draft-js-multidecorators",
      commonjs2: "draft-js-multidecorators",
      amd: "draft-js-multidecorators",
      root: "draft-js-multidecorators"
    }
  }
};
