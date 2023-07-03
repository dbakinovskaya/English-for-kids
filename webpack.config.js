const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "scripts", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.[contenthash].js",
    assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: path.join("icons", "[name].[contenthash][ext]"),
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "template.html"),
      filename: "index.html",
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/json/cards.json", to: "cards.json" },
        { from: "src/images", to: "images" },
        { from: "src/icons", to: "icons" },
        { from: "src/audio", to: "audio" },
      ]
    }),
  ],

  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 9000,
  },
};
