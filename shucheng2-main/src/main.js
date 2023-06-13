import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.prototype.$axios = axios;
import ElementUI from 'element-ui';
import './assets/font/iconfont.css';
import 'element-ui/lib/theme-chalk/index.css';
axios.defaults.baseURL='/';
Vue.use(ElementUI);
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
