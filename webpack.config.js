
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname) + '/main.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
		loader: 'vue-loader',
		options: {
			loaders: {
				js: 'babel-loader'
			}
		}
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  resolve: {
	extensions: [".js", ".vue", ".css", ".json"],
	modules: [
		__dirname,
		'node_modules',
	],
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
}