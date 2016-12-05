import FastClick from 'fastclick'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import * as database from 'database'
// import * as helpers from './helpers'
import setLocale from './i18n'
import router from './router'
import store from './store'
import Vuelog from './Vuelog'

FastClick.attach(document.body)
setLocale(database.config.lang)
sync(store, router)

// Object.keys(helpers).forEach(key => {
//   Vue.filter(key, helpers[key])
// })

const app = new Vue({
  router,
  store,
  ...Vuelog
})

app.$mount('#app')
