import FastClick from 'fastclick'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Vuelog from './Vuelog'
import { langs, locales } from './i18n'
import router from './router'
import store from './store'

FastClick.attach(document.body)

langs.forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

sync(store, router)

const app = new Vue({
  router,
  store,
  ...Vuelog
})

app.$mount('#app')
