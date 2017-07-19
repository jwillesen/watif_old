const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'watif-demo.js',
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      }, {
        test: /\.html$/,
        include: path.resolve('./src'),
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
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
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join((__dirname, 'dist')),
  },
}

module.exports = config
