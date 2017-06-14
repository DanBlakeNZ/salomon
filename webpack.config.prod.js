import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production') // This will be used to set React for production
}

export default {
  debug: true, // Enables the showing of debug information.
  devtool: 'source-map',
  noInfo: true, // Will display (false) or hide (true) a list of all the files that it is bundling. Allows you to see what webpack is doing.
  entry: './src/index',
  target: 'web', // Could also be set to bundle for 'node'
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.OccurenceOrderPlugin(), // Optimizes the order our files are bundled in for optimal mini-fication.
    new webpack.DefinePlugin(GLOBALS), // Allos us to define variables that are then made avaliable to the libaries webpack is bundling. React looks at the node environment to deturmine if it should be built in production mode which will omit development specific features like prop.types.
    new ExtractTextPlugin('styles.css'), // Allows us to extract our css into a seperate file (this needs to be referenced in our production html)
    new webpack.optimize.DedupePlugin(), // Helps to emiminate duplicate packages.
    new webpack.optimize.UglifyJsPlugin() // This will minify the javascript.
  ],
  module: { // This section tells webpack what file types it should handle.
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap')},
      // The following 4 lines are required for the use of Bootstrap and fonts.
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
}
