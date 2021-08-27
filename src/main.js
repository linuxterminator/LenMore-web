import Vue from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router'

import routes from "@/router/router"
const router = new VueRouter({
  routes:routes
})

Vue.use(VueRouter)
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
