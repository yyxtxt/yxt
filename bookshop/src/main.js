import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入axios模块
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
//全局应用
Vue.prototype.$axios = axios
//全局请求都应用统一的接口前端
axios.defaults.baseURL = '/api';
//使用
Vue.use( VueAxios , axios )

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI,);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
