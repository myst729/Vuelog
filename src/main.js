import FastClick from 'fastclick'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import * as database from 'database'
import Vuelog from './Vuelog'
import { setLocale } from './i18n'
import router from './router'
import store from './store'

FastClick.attach(document.body)
setLocale(database.config.lang)
sync(store, router)

const app = new Vue({
  router,
  store,
  ...Vuelog
})

app.$mount('#app')
