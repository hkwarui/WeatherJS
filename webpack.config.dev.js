/* eslint-disable no-undef */
//import HtmlWebpackplugin from "html-webpack-plugin";
//import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";

export default {
  context: path.resolve("js"),
  entry: ["@babel/polyfill", "./index.js"],
  output: {
    path: path.resolve(__dirname, "builds/js"),
    publicPath: "/src/assets/",
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  mode: "development",
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  }
};
