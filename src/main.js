import FastClick from 'fastclick'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Vuelog from './Vuelog'
import router from './router'
import store from './store'
import * as filters from './filters'

FastClick.attach(document.body)
sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  el: '#app',
  router,
  store,
  ...Vuelog
})

export { app, router, store }
