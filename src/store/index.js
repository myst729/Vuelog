import Vue from 'vue'
import Vuex from 'vuex'
import { languages } from '../i18n'
import * as system from '../../package.json'
import * as database from 'database'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '',
    lang: '',
    menu: false,
    system,
    database
  },

  actions: {
    DOCUMENT_TITLE: ({ commit, state }, title) => {
      const documentTitle = title ? (state.database.config.brand + ' | ' + title) : state.database.config.brand
      commit('SET_DOCUMENT_TITLE', { title: documentTitle })
    },

    SYSTEM_LANGUAGE: ({ commit, state }, language) => {
      const lang = Object.keys(languages).indexOf(language) > -1 ? language : state.database.config.lang
      commit('SET_SYSTEM_LANGUAGE', { lang })
    },

    SIDE_MENU: ({ commit, state }, visibility) => {
      commit('TOGGLE_SIDE_MENU', { visibility })
    }
  },

  mutations: {
    SET_DOCUMENT_TITLE: (state, { title }) => {
      state.title = title
    },

    SET_SYSTEM_LANGUAGE: (state, { lang }) => {
      state.lang = lang
    },

    TOGGLE_SIDE_MENU: (state, { visibility }) => {
      state.menu = visibility
    }
  },

  getters: {
    title: (state) => state.title,

    lang: (state) => state.lang,

    menu: (state) => state.menu,

    system: (state) => state.system,

    config: (state) => state.database.config,

    navigation: (state) => state.database.navigation,

    pages (state) {
      return state.database.pages.map(page => {
        page.markdown = './userdata/pages/' + page.slug + '.md'
        return page
      })
    },

    categories: (state) => state.database.categories,

    posts (state, getters) {
      var categoriesHash = {}
      getters.categories.forEach((category) => {
        categoriesHash[category.slug] = category.title
      })
      return state.database.posts.map((post) => {
        post.year = new Date(post.date).getFullYear()
        post.markdown = './userdata/posts/' + post.year + '/' + post.slug + '.md'
        post.categoryTitle = categoriesHash[post.category]
        return post
      }).sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    },

    postsByCategory (state, getters) {
      return getters.categories.map((category) => {
        return {
          slug: category.slug,
          title: category.title,
          posts: getters.posts.filter((post) => post.category === category.slug).sort((a, b) => new Date(b.date) - new Date(a.date))
        }
      })
    },

    postsByYear (state, getters) {
      const years = [...new Set(getters.posts.map((post) => post.year))].sort((a, b) => b - a)
      return years.map((year) => {
        return {
          year,
          posts: getters.posts.filter((post) => post.year === year).sort((a, b) => new Date(b.date) - new Date(a.date))
        }
      })
    }
  }
})

export default store
