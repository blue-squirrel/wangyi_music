const jsdom = require('jsdom')
const { JSDOM } = jsdom

module.exports = {
  /* 部署应用包的基本URL, 不设置可能会出现打包后项目找不到资源问题 */
  publicPath: './',

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(html)$/,
          exclude: /node_modules/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        }
      ]
    }
  },
  // 以下代码是安装了预渲染的插件之后自动添加的
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/recommend',
        '/singer',
        '/rank',
        '/search',
        '/account',
        '/detail'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        // console.log(route)
        let reg = /<meta name="viewport".*user-scalable=no">/gi
        let res = route.html.match(reg)
        route.html = route.html.replace(res[1], '')
        return route
      }
    }
  }
}
