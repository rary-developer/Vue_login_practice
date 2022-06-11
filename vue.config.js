const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //cors err 뜨면 사용한다. url 우회
  devServer:{
    proxy:{
      "/api":{
        target:"http://localhost:3000"
      }
    }
  }


})
