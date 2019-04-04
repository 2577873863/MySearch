import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// node_modules\@vue\cli-service\lib\commands\serve.js
// 在上述文件修改端口
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
