import FastClick from 'fastclick'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import i18n from './i18n'
import router from './router'
import store from './store'
import Vuelog from './Vuelog'
import './assets/styles/index.styl'
import { brand, project, version, website } from '../package'

FastClick.attach(document.body)
sync(store, router)

const app = new Vue({
  i18n,
  router,
  store,
  ...Vuelog
})

app.$mount('#app')

window[brand] = { version, url: website, repo: project }
