const TimeStamp = new Date().getTime();
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`js/[name]-${process.env.VUE_APP_VERSION}-${TimeStamp}.js`);
      config.output.chunkFilename(`js/[name]-${process.env.VUE_APP_VERSION}-${TimeStamp}.js`);
    }
    // 移除 prefetch、preload 插件
    config.plugins.delete("prefetch").delete("preload")
    // webpack 会默认给commonChunk打进chunk-vendors，所以需要对webpack的配置进行delete
    config.optimization.delete('splitChunks')

    config.plugin('html').tap(args => {
      args[0].title = 'h5'
      return args
    })
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: { // 删除注释
              comments: false
            },
            //生产环境自动删除console
            compress: {
              //warnings: false, // 若打包错误，则注释这行
              drop_debugger: true,  // 清除 debugger 语句
              drop_console: true,   // 清除console语句
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      ]
    }
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
