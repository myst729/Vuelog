import i18n from '../i18n'

export function documentTitle ({ commit, state }, title) {
  commit('setDocumentTitle', { title })
}

export function systemLanguage ({ commit, state }, language) {
  const valid = Object.keys(state.languages).indexOf(language) > -1
  const lang = valid ? language : state.database.config.defaultLang
  commit('setSystemLanguage', { lang })
  i18n.locale = lang
}

export function sideMenu ({ commit, state }, visibility) {
  commit('setSideMenu', { visibility })
}
