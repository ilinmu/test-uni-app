const constants = require('./config/constants');

module.exports = {
  publicPath: './',
  devServer : {
    proxy: {
      '/': {
        target: constants.targetUrl,
        changeOrigin : true,
        ws: false,
      }
    }
  }
};
