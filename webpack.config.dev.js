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
      { test: /\.js$/, exclude: /node_module/, use: ["babel-loader"] },
      {
        test: /\.css$/,
        exclude: /node_module/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
