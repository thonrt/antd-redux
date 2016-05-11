var path = require('path');
module.exports = function(webpackConfig) {
  console.log(webpackConfig);
  webpackConfig.entry['index'][1] = path.resolve(__dirname, 'app', 'index.jsx');

  webpackConfig.module.loaders.forEach(function(loader) {
    if (loader.loader === 'babel') {
      // https://github.com/ant-design/babel-plugin-antd
      loader.query.plugins.push('antd');
    }
    return loader;
  });

  // Fix ie8 compatibility
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify'
  });

  return webpackConfig;
};
