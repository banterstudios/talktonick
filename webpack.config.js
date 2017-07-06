const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

const getDirectories = srcPath => {
  return fs.readdirSync(srcPath)
    .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory())
}

const generateAliases = basePath => {
  const aliases = {}
  const dirNames = getDirectories(basePath)

  dirNames.forEach(dirName => {
    aliases[dirName] = path.resolve(__dirname, basePath + '/' + dirName)
  })

  return aliases
}

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'js/app.js',
    publicPath: '/static'
  },
  resolve: {
    alias: generateAliases('client')
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      // Pre-loaders
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.scss/,
        loader: 'import-glob',
        enforce: 'pre'
      },
      // Loaders
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|eot|mp4)$/i,
        loader: 'file-loader',
        query: {
          name: 'assets/[path][name].[ext]',
          context: './client/assets'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  devtool: 'cheap-module-eval-source-map'
}
