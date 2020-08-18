import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from '@/router/index.js'
import '@/styles/index.less'
import 'element-ui/lib/theme-chalk/index.css';
import '@/server/axiosInterceptors.js'
import '@/mock/index.js'
import store from '@/store/index.js'
Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
