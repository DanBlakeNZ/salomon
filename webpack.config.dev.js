import webpack from 'webpack'
import path from 'path'

export default {
  debug: true, // Enables the showing of debug information.
  devtool: 'cheap-module-eval-source-map',
  noInfo: true, // Will display (false) or hide (true) a list of all the files that it is bundling. Allows you to see what webpack is doing.
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', // Could also be set to bundle for 'node'
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src') // Tells the webpack devServer where our code is located.
  },
  plugins: [
      new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.HotModuleReplacementPlugin(), // Enable us to replace modules without doing a full browser refresh.
    new webpack.NoErrorsPlugin() // Will keep errors from breaking the hot reload, will display error in browser.
  ],
  module: { // This section tells webpack what file types it should handle.
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      // The following 4 lines are required for the use of Bootstrap and fonts.
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
}
