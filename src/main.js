// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from "./router/index"
import { createStore } from "./store/index"
// 创建 路由 状态机 实例
const router = new createRouter()
const store = new createStore()
// 写入全局样式
import '@/assets/css/reset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
