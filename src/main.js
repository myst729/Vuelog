import FastClick from 'fastclick'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import './i18n'
import Vuelog from './Vuelog'
import router from './router'
import store from './store'

FastClick.attach(document.body)
sync(store, router)

const app = new Vue({
  router,
  store,
  ...Vuelog
})

app.$mount('#app')
