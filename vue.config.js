// vue.config.js
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath:'./',// 部署应用包时的基本 URL Default: '/'部署在域名根路径；例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
  outputDir:'dist',//Default: 'dist',当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  assetsDir:'static',//Default: '',放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  indexPath:'index.html',// Default: 'index.html',指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  filenameHashing:true,//Default: true,默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  lintOnSave: process.env.NODE_ENV !== 'production',//生产环境关闭eslint Type: boolean | 'warning' | 'default' | 'error'是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  productionSourceMap:false,//Default: true,如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  devServer: {
    // overlay 同时显示lint警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    //如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
    // proxy: 'http://192.192.192.92:9101'
  },
  //Type: Object | Function,如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  configureWebpack:()=>{
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@asset", resolve("src/assets"))
      .set("components", resolve("src/components"))
  },
}