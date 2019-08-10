const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

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
      new BundleAnalyzerPlugin(),
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/', '/login/'],
        renderer: new Renderer({
  
          // Optional - defaults to 0, no limit.
          // Routes are rendered asynchronously.
          // Use this to limit the number of routes rendered in parallel.
          maxConcurrentRoutes: 4,
  
  
          // Optional - Wait to render until a certain amount of time has passed.
          // NOT RECOMMENDED
          renderAfterTime: 5000, // Wait 5 seconds.
  
          // Other puppeteer options.
          // (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
          headless: false // Display the browser window when rendering. Useful for debugging.
        })
      })
    ]
  }
}