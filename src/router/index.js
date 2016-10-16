import Vue from 'vue'
import VueRouter from 'vue-router'
import * as database from 'database'

Vue.use(VueRouter)

// `VuelogHome` and `VuelogOops` views are not necessarily lazy loaded
import VuelogHome from '../views/VuelogHome'
import VuelogOops from '../views/VuelogOops'
const VuelogArchive = resolve => require(['../views/VuelogArchive'], resolve)
const VuelogPosts = resolve => require(['../views/VuelogPosts'], resolve)
const VuelogPost = resolve => require(['../views/VuelogPost'], resolve)
const VuelogPage = resolve => require(['../views/VuelogPage'], resolve)

var routes = [
  { path: '/archive', name: 'archive', component: VuelogArchive },
  { path: '/archive/category/:category', name: 'archive-category', component: VuelogArchive },
  { path: '/archive/year/:year', name: 'archive-year', component: VuelogArchive },
  { path: '/blog', name: 'posts', component: VuelogPosts },
  { path: '/blog/p/:p', name: 'posts-more', component: VuelogPosts },
  { path: '/category/:category', name: 'category', component: VuelogPosts },
  { path: '/category/:category/p/:p', name: 'category-more', component: VuelogPosts },
  { path: '/category/:category/:year/:post', name: 'post', component: VuelogPost },
  { path: '/page/:page', name: 'page', component: VuelogPage },
  { path: '/oops', name: 'oops', component: VuelogOops }
]

if (database.deployment.useHomepage) {
  routes.push({ path: '/home', name: 'home', component: VuelogHome })
  routes.push({ path: '/', redirect: '/home' })
} else {
  routes.push({ path: '/home', redirect: '/blog' })
  routes.push({ path: '/', redirect: '/blog' })
}
routes.push({ path: '/p/:p', redirect: '/blog/p/:p' })
routes.push({ path: '*', redirect: '/oops' })

var router = new VueRouter({
  // TODO scrollBehavior: () => ({ y: 0 }),
  routes
})

router.afterEach(function (transition) {
  // console.log(transition)
  window.scrollTo(0, 0)
  document.title = `Vuelog | ${Math.random()}` // TODO
})

export default router
