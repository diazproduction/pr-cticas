module.exports = {
  entry: './src/custom/js/script.js',
  output: {
    filename: "./prebuild/custom/js/bundle.js"
  },
  watch: true,

  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude:"./node_modules",
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
}
