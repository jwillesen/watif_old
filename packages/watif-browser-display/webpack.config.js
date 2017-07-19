const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

const conditionalPlugins = []
if (process.env.ANALYZE) conditionalPlugins.push(new BundleAnalyzerPlugin())

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    library: 'watif-browser-display',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'watif-browser-display.js',
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
            localIdentName: '[path]__[name]__[local]__[hash:base64:5]',
          },
        }],
      },
    ],
  },

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React',
    },
    'change-case': {
      commonjs: 'change-case',
      commonjs2: 'change-case',
    },
  },

  devtool: 'cheap-module-source-map',
}

module.exports = config
