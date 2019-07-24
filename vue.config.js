const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  publicPath: "/",
  assetsDir: "static",
  pages: {
    index: {
      entry: "./src/main.js",
      templage: './public/index.html',
      filename: 'index.html',
      title: '微博',
    }
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  }
}