var path = require('path');

module.exports = {
  context: path.resolve('src/custom/jsx'),
  entry: './index.jsx',
  output: {
    path: path.resolve('build/custom/js'),
    publicPath: '/build/custom/js/',
    filename: "bundle.js"
  },
  watch: true,

  devServer: {
    contentBase: 'src/custom/html'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude:"./node_modules",
        loader: "jsx-loader?insertPragma=React.DOM&harmony"
      },
      {
        test: /\es6$/,
        exclude: "./node-modules",
        loader: "babel-loader"
      }
    ]
  },

  externals: {
    'react': 'React'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.es6']
  }
}
