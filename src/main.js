import FastClick from 'fastclick'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Vuelog from './Vuelog'
import { lang, langs, locales } from './i18n'
import router from './router'
import store from './store'

FastClick.attach(document.body)

Vue.config.lang = lang
langs.forEach(l => {
  Vue.locale(l, locales[l])
})

sync(store, router)

const app = new Vue({
  router,
  store,
  ...Vuelog
})

app.$mount('#app')
