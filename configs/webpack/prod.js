// production config
const merge = require('webpack-merge');
const { resolve } = require("path");
const commonConfig = require('./common');
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "js/bundle.[hash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/"
  },
  devtool: "source-map",
  plugins: [
    new WorkboxPlugin.GenerateSW({
      swDest: "service-worker.js",
      // Do not precache images
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],

      // Define runtime caching rules.
      runtimeCaching: [
        {
          // Match any request that ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

          // Apply a cache-first strategy.
          handler: "CacheFirst",

          options: {
            // Use a custom cache name.
            cacheName: "images",
            // Only cache 10 images.
            expiration: {
              maxEntries: 20
            }
          }
        }
      ]
    })
  ],
  performance: {
    hints: "warning"
  }
});
