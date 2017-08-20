import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as database from 'database'
import { locales } from './locales'

Vue.use(VueI18n)

export default new VueI18n({
  locale: database.config.defaultLang,
  messages: locales
})
