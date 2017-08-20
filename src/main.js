import 'es6-promise/auto'
import FastClick from 'fastclick'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import i18n from './i18n'
import router from './router'
import store from './store'
import Vuelog from './Vuelog'

FastClick.attach(document.body)
sync(store, router)

const app = new Vue({
  i18n,
  router,
  store,
  ...Vuelog
})

app.$mount('#app')
