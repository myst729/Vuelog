import Vue from 'vue'
import Vuex from 'vuex'
import * as database from 'database'
import { languages } from '../i18n/locales'
import { brand, project, version } from '../../package.json'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  title: database.config.brand,
  lang: database.config.lang,
  menu: false,
  system: { brand, project, version },
  database,
  languages
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
