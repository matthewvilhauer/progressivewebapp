// shared config (dev and prod)
const webpack = require('webpack');
const {resolve} = require('path');
const path = require("path");
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require("webpack-pwa-manifest");

const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  context: resolve(__dirname, "../../src"),
  output: {
    filename: "js/bundle.[hash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/progressivewebapp"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)?$/,
        use: ["babel-loader", "awesome-typescript-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      },
      {
        test: /favicon\.ico$/,
        loader: "url",
        query: {
          name: "[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html.ejs",
      favicon: path.resolve("src/assets/img/favicon.ico"),
      title:
        "Office UI Fabric starter-kit with React, TypeScript, and Webpack - from Webpack"
    }),
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH)
    }),
    new WebpackPwaManifest({
      name: "Progressive Web App",
      short_name: "PWA",
      description:
        "Progressive Web App built with React, React Router, Typescript, Office UI Fabric, and Webpack from Webpack",
      background_color: "#ffffff",
      crossorigin: null, //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve("src/assets/img/ios-icon.png"),
          sizes: [120, 144, 152, 167, 180, 192, 256, 512],
          destination: path.join("icons", "ios"),
          ios: true
        },
        {
          src: path.resolve("src/assets/img/ios-icon.png"),
          size: 1024,
          destination: path.join("icons", "ios"),
          ios: "startup"
        },
        {
          src: path.resolve("src/assets/img/android-icon.png"),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join("icons", "android")
        }
      ]
    })
  ],
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
