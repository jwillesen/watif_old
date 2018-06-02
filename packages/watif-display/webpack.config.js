const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

const conditionalPlugins = []
if (process.env.ANALYZE) conditionalPlugins.push(new BundleAnalyzerPlugin())

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    library: '@watif/display',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'watif-display.js',
  },
  plugins: [
    ...conditionalPlugins,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]__[path][name]__[hash:base64:5]',
            importLoaders: 1,
          },
        }, {
          loader: 'postcss-loader',
        }],
      },
    ],
  },

  devtool: 'source-map',
}

module.exports = config