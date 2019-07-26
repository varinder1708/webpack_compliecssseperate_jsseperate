const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/js/app",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundleme.js",
    publicPath:"/dist"
  },
  module: {
    rules: [
        {
            test:/\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
          
        },
        {
           test:/\.js$/,
           use:{
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
           },
        }
     
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
  ]
};
