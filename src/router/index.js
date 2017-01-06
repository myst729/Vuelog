import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import * as database from 'database'

import VuelogHome from '../views/VuelogHome'
import VuelogOops from '../views/VuelogOops'
import VuelogArchive from '../views/VuelogArchive'
import VuelogPosts from '../views/VuelogPosts'
import VuelogPost from '../views/VuelogPost'
import VuelogPage from '../views/VuelogPage'
import VuelogContentPart from '../views/nested/VuelogContentPart'

// Or lazy load route view components if interested
// const VuelogArchive = resolve => require(['../views/VuelogArchive'], resolve)
// const VuelogPosts = resolve => require(['../views/VuelogPosts'], resolve)
// const VuelogPost = resolve => require(['../views/VuelogPost'], resolve)
// const VuelogPage = resolve => require(['../views/VuelogPage'], resolve)
// const VuelogContentPart = resolve => require(['../views/nested/VuelogContentPart'], resolve)

Vue.use(VueMeta)
Vue.use(VueRouter)

function contentPartRoutes (parentType) {
  return [
    { path: '', name: parentType, component: VuelogContentPart },
    { path: ':part', name: `${parentType}-part`, component: VuelogContentPart }
  ]
}

var routes = [
  { path: '/archive', name: 'archive', component: VuelogArchive },
  { path: '/archive/category/:category', name: 'archive-category', component: VuelogArchive },
  { path: '/archive/year/:year', name: 'archive-year', component: VuelogArchive },
  { path: '/blog', name: 'posts', component: VuelogPosts },
  { path: '/blog/p/:p', name: 'posts-more', component: VuelogPosts },
  { path: '/blog/:category', name: 'category', component: VuelogPosts },
  { path: '/blog/:category/p/:p', name: 'category-more', component: VuelogPosts },
  { path: '/blog/:category/:year/:slug', component: VuelogPost, children: contentPartRoutes('post') },
  { path: '/page/:page', component: VuelogPage, children: contentPartRoutes('page') },
  { path: '/oops', name: 'oops', component: VuelogOops }
]

if (database.config.useHomepage) {
  routes.push({ path: '/home', name: 'home', component: VuelogHome })
  routes.push({ path: '/', redirect: '/home' })
} else {
  routes.push({ path: '/home', redirect: '/blog' })
  routes.push({ path: '/', redirect: '/blog' })
}
routes.push({ path: '/p/:p', redirect: '/blog/p/:p' })
routes.push({ path: '*', redirect: '/oops' })

const router = new VueRouter({
  routes,
  mode: 'hash',
  base: database.config.base
})

router.beforeEach((to, from, next) => {
  var modified = false
  var route = Object.assign({}, to)

  // Param `part` is presented but not a natural number
  if (to.params.part) {
    let natural = Number.parseInt(to.params.part, 10)
    if (!Number.isNaN(natural) && `${natural}` !== to.params.part) {
      route.params.part = `${natural}`
      modified = true
    }
  }

  // Locale set could be missing
  if (from.query.lang && !to.query.lang) {
    route.query.lang = from.query.lang
    modified = true
  }

  if (modified) {
    next(route)
  } else {
    next()
  }
})

export default router
