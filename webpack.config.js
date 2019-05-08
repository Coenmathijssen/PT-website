const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebPackPlugin({
      template: 'src/matches.html',
      filename: 'matches.html'
    }),
    new HtmlWebPackPlugin({
      template: 'src/messages.html',
      filename: 'messages.html'
    }),
    new HtmlWebPackPlugin({
      template: 'src/profile-overview.html',
      filename: 'profile-overview.html'
    }),
    new HtmlWebPackPlugin({
      template: 'src/profile-detail.html',
      filename: 'profile-detail.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
