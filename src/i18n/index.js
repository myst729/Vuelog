import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { locales } from './locales'

Vue.use(VueI18n)

Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang])
})

export default function setLocale (locale) {
  Vue.config.lang = locale
}
