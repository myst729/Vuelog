import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as database from 'database'
import * as locales from './locales'

Vue.use(VueI18n)
Vue.config.lang = database.config.lang

const langs = Object.keys(locales)

export { langs, locales }
