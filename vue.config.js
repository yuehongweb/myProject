// vue.config.js
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: (config) => {
        // 给路径设置别名
        config.resolve.alias
          .set('@', resolve('src'))
          .set('@assets',resolve('src/assets'))
          // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
      }
}