/**
 * Configuration file for react-styleguidist.
 */

const path = require('path')

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        }
      ],
    },
    // This is neccessary because react-styleguidist does not read the
    // NODE_PATH from .env, unlike create-create-app.
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/styles'),
        components: path.resolve(__dirname, 'src/components')
      }
    }
  }
}
