import Vue from 'vue'
import Router from 'vue-router'

import {
  demo
} from '../views'

Vue.use(Router)

export function createRouter () {
  return new Router({
    routes: [
      { path: '/', redirect: '/demo' },
      { path: '/demo', component: demo }
    ]
  })
}
