const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer : {
  	  proxy:{
  		  // /api：后端数据接口的上下文路径
  		  '/api' :{
  			  target:'http://111.229.37.167',
  			   //允许跨域访问
  		  'changOrigin' : true
  		  } 
  		 
  	  }
  }
})
