import Vue from 'vue'
import Vuex from 'vuex'
import system from './system'
import * as database from 'database'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    system,
    database
  },

  actions: {
    // FETCH_ITEMS: ({ commit, state }, { ids }) => {
    //   // only fetch items that we don't already have.
    //   ids = ids.filter(id => !state.items[id])
    //   if (ids.length) {
    //     // return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
    //   } else {
    //     return Promise.resolve()
    //   }
    // },

    // FETCH_USER: ({ commit, state }, { id }) => {
    //   // return state.users[id]
    //   //   ? Promise.resolve(state.users[id])
    //   //   : fetchUser(id).then(user => commit('SET_USER', { user }))
    // }
  },

  mutations: {
    // SET_ACTIVE_TYPE: (state, { type }) => {
    //   state.activeType = type
    // },

    // SET_LIST: (state, { type, ids }) => {
    //   state.lists[type] = ids
    // },

    // SET_ITEMS: (state, { items }) => {
    //   items.forEach(item => {
    //     if (item) {
    //       Vue.set(state.items, item.id, item)
    //     }
    //   })
    // },

    // SET_USER: (state, { user }) => {
    //   Vue.set(state.users, user.id, user)
    // }
  },

  getters: {
    system: (state) => state.system,

    deployment: (state) => state.database.deployment,

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
      })
    },

    postsByCategory (state, getters) {
      return getters.categories.map((category) => {
        return {
          slug: category.slug,
          title: category.title,
          posts: getters.posts.filter((post) => post.category === category.slug)
        }
      })
    },

    postsByYear (state, getters) {
      var years = [...new Set(getters.posts.map((post) => post.year))].sort((a, b) => b - a)
      return years.map((year) => {
        return {
          year,
          posts: getters.posts.filter((post) => post.year === year)
        }
      })
    }
  }
})

export default store
