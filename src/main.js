import FastClick from 'fastclick'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import i18n from './i18n'
import router from './router'
import store from './store'
import Vuelog from './Vuelog'
import './assets/styles/index.styl'
import { project, version, website } from '../package'

Object.assign(window.Vuelog, { version, url: website, repo: project })
FastClick.attach(document.body)
Vue.config.productionTip = false
sync(store, router)

new Vue({
  i18n,
  router,
  store,
  ...Vuelog
}).$mount('#app')
