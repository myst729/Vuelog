import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { languages, locales } from './locales'

Vue.use(VueI18n)

function setLocale (locale) {
  Vue.config.lang = locale
}

Object.keys(locales).forEach(key => {
  Vue.locale(key, locales[key])
})

export { languages, setLocale }
