import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './routes'
//引入图标库
import '@/assets/js/iconfont.js'
import '@/assets/css/icon.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
