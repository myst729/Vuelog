import Vue from 'vue'
import Vuex from 'vuex'
import * as database from 'database'
import { locales } from '../i18n/locales'
import { brand, project, version } from '../../package.json'

Vue.use(Vuex)

const state = {
  title: database.config.brand,
  lang: database.config.lang,
  menu: false,
  system: { brand, project, version },
  database
}

export const actions = {
  documentTitle: ({ commit, state }, title) => {
    const documentTitle = title ? (state.database.config.brand + ' | ' + title) : state.database.config.brand
    commit('setDocumentTitle', { title: documentTitle })
  },

  systemLanguage: ({ commit, state }, language) => {
    const lang = Object.keys(locales).indexOf(language) > -1 ? language : state.database.config.lang
    commit('setSystemLanguage', { lang })
  },

  sideMenu: ({ commit, state }, visibility) => {
    commit('setSideMenu', { visibility })
  }
}

export const mutations = {
  setDocumentTitle: (state, { title }) => {
    state.title = title
  },

  setSystemLanguage: (state, { lang }) => {
    state.lang = lang
  },

  setSideMenu: (state, { visibility }) => {
    state.menu = visibility
  }
}

export const getters = {
  title: state => state.title,

  lang: state => state.lang,

  menu: state => state.menu,

  system: state => state.system,

  config: state => state.database.config,

  navigation: state => state.database.navigation,

  pages: state => {
    return state.database.pages
      .map(page => {
        page.markdown = './userdata/pages/' + page.slug + '.md'
        return page
      })
  },

  categories: state => state.database.categories,

  posts: (state, getters) => {
    var categoriesHash = {}
    getters.categories.forEach(category => {
      categoriesHash[category.slug] = category.title
    })

    return state.database.posts
      .map(post => {
        post.year = new Date(post.date).getFullYear()
        post.markdown = './userdata/posts/' + post.year + '/' + post.slug + '.md'
        post.categoryTitle = categoriesHash[post.category]
        return post
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  },

  postsByCategory: (state, getters) => {
    return getters.categories
      .map(category => {
        return {
          slug: category.slug,
          title: category.title,
          posts: getters.posts
            .filter(post => post.category === category.slug)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
        }
      })
  },

  postsByYear: (state, getters) => {
    const years = [...new Set(getters.posts.map(post => post.year))]
    return years
      .sort((a, b) => b - a)
      .map(year => {
        return {
          year,
          posts: getters.posts
            .filter(post => post.year === year)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
        }
      })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
