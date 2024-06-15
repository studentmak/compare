const path = require('path');
const { VueLoaderPlugin, default: loader } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: './src/bundle.js',
    },

    devServer: {
      proxy: {
        '/':'http://localhost:3000/'
      }
    },

    resolve:{
        fallback: {
          util: require.resolve("util/")
        }
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
          },

          {
            test: /\.js$/,
            use: {
                loader: "babel-loader"
            }
          },

          {
            test: /\.x$/,
            loader:"webpack-xlsx-loader"
          },


          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },

          {
            test: /\.css$/,
              use: [
                'vue-style-loader',
                'css-loader',
              ]
          },
        ],
    },
    


    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new VueLoaderPlugin(),
      new NodePolyfillPlugin()
  ],
}