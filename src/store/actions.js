export function documentTitle ({ commit, state }, title) {
  const documentTitle = title ? (state.database.config.brand + ' | ' + title) : state.database.config.brand
  commit('setDocumentTitle', { title: documentTitle })
}

export function systemLanguage ({ commit, state }, language) {
  const lang = Object.keys(state.locales).indexOf(language) > -1 ? language : state.database.config.lang
  commit('setSystemLanguage', { lang })
}

export function sideMenu ({ commit, state }, visibility) {
  commit('setSideMenu', { visibility })
}
