/*module.exports = {
  lintOnSave: false,
  devServer: {
    proxy:'http://localhost:3030/',

/Users/Alena/Desktop/OnlineStoreVueJS
  }

};*/
module.exports = {
  lintOnSave: false,
  // Other options...
  pluginOptions: {
    // Express-related options
    express: {
      shouldServeApp: true,
      serverDir: './server',
    },
  },

};


