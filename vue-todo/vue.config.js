const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer :{
    proxy :"http://test.goodsflow.com/office2/api/"
  }
})
