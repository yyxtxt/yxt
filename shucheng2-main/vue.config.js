const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
  	  proxy:{
  		   '/shu':{
  		      target:'https://api.zhuishushenqi.com',
  		      changOrigin:true,
		      secure:true,
		      pathRewrite:{
		          '^/shu':'/'
		      }
  		  },
		  '/www':{
		      target:'',
		      changOrigin:true,
		  	  pathRewrite:{
		  	     '^/www':'/'
		  	  }
		  },
		  '/http':{
		      target:'',
		      changOrigin:true,
			  pathRewrite:{
			     '^/http':'/'
			  }
		  }
  	  }
  }
})
