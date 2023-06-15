import Vue from 'vue'
import Vuex from 'vuex'

import cart from './moduies/cart.js'

import user from './moduies/user.js'
//引入持久
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
	  cart,
	  user
  },
  plugins:[createPersistedState()]
})
