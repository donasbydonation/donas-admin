const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({
              configFile: path.resolve(__dirname, './tsconfig.json'),
          }));
          return webpackConfig;
        }
      }
    }
  ]
};
