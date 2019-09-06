import HtmlWebpackplugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackplugin({
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_module/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style", "css"] }
    ]
  }
};
