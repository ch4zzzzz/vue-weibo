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
}