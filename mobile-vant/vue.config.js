const TimeStamp = new Date().getTime();

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`js/[name]-${process.env.VUE_APP_VERSION}-${TimeStamp}.js`);
      config.output.chunkFilename(`js/[name]-${process.env.VUE_APP_VERSION}-${TimeStamp}.js`);
    }
    config.plugins.delete('prefetch');
  },
  devServer: {
    open: true, // 自动启动浏览器
    port: 8088,  // 开发服务器端口
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          outputStyle: 'expanded'
        }
      }
    }
  }
}
