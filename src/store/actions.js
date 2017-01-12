export function documentTitle ({ commit, state }, title) {
  commit('setDocumentTitle', { title })
}

export function systemLanguage ({ commit, state }, language) {
  const lang = Object.keys(state.languages).indexOf(language) > -1 ? language : state.database.config.defaultLang
  commit('setSystemLanguage', { lang })
}

export function sideMenu ({ commit, state }, visibility) {
  commit('setSideMenu', { visibility })
}
