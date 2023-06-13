// 存储数据的状态
const state = {
	// 存储用户登录/注册数据
	save:[]
}

// 数据操作函数
const mutations = {
	// 添加用户信息操作
	serPrint(state,all){
		state.save=all;
	}
}

export default{
	namespaced:true,
	state,
	mutations,
}