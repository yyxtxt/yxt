//存储数据的状态
const state = {
	//存储用户登录/注册数据
	user : null
}

//数据操作函数
const mutations = {
	saveUser( state , { username , id}){
		state.user = { username , id}
	},
	
	delUser( state){
		state.user = null
	}
	
}

export default{
	namespaced:true,
	state ,
	mutations ,
	
}



