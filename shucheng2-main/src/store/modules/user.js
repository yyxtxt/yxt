// 存储数据的状态
const state = {
	// 存储用户登录/注册数据
	user:null
}

// 数据操作函数
const mutations = {
	// 添加用户信息操作
	saveUser(state,{username,id}){
		// 将传递过来的用户以及id存储到数据当中
		state.user = {username,id}
	},
	
	// 退出登录，清除用户登录信息
	delUser(state){
		// 当用户触发退出登录时，将整个登录信息清空
		state.user=null
	}
}

export default{
	namespaced:true,
	state,
	mutations,
}