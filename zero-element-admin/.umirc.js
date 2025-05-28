
// ref: https://umijs.org/config/
export default {
  devServer: {
    port: 8080
  },
  // proxy: {
  //   '/api/doswagger': {
  //     target: 'http://192.168.137.1:8080',
  //     changeOrigin: true
  //   },
  //   '/api/pageconfig': {
  //     target: 'http://gitlab2.cdnline.cn:8000',
  //     changeOrigin: true
  //   }
  // },
  title: 'swaggerhub',
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  // dynamicImport: {
  //   loading: '@/framework/Loading'
  // },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  antd: {},
  dva: false,
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件

  history: {
    type: 'hash'
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
     memo.output.set('path', require('path').resolve(__dirname, 'dist/swaggerhub'))
     memo.output.set('filename', 'bundle.js')
  },
   
  // outputPath: '/dist/swaggerhub',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'  //设置 dist/index.html 访问 js和css路径
}
