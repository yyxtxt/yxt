import Vue from 'vue'
import Vuex from 'vuex'
// 1.引入模块cart
import cart from './modules/cart'
// 1.引入模块user
import user from './modules/user.js'
// 1.引入模块cnm
import cnm from './modules/cnm.js'
// 引入持久化存储插件【vuex的数据同步更新存储到localStorage】
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  code:[],
	  wuyu:[],
	  wuyu1:[]
  },
  getters: {
  },
  mutations: {
	  serPrint(state,all){
	  	state.code=all;
	  },
	  cnmPnm(c,n){
		  c.wuyu=n
	  }
  },
  actions: {
  },
  // 模块对象
  modules: {
	  // 2.应用已注册的模块
	  cart,
	  user,
	  cnm
  },
  // 设置整个store存储持久化
  plugins:[createPersistedState()]
})
