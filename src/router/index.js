import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VuelogHome from '../views/VuelogHome'
import VuelogArchive from '../views/VuelogArchive'
import VuelogPosts from '../views/VuelogPosts'
import VuelogPost from '../views/VuelogPost'
import VuelogPage from '../views/VuelogPage'
import VuelogOops from '../views/VuelogOops'

var routes = [
  { name: 'home', path: '/home', component: VuelogHome },
  { name: 'archive', path: '/archive', component: VuelogArchive },
  { name: 'archive-year', path: '/archive/year/:year', component: VuelogArchive },
  { name: 'archive-category', path: '/archive/category/:category', component: VuelogArchive },
  { name: 'blog', path: '/blog', component: VuelogPosts },
  { name: 'blog-more', path: '/blog/p/:p', component: VuelogPosts },
  { name: 'category', path: '/category/:category', component: VuelogPosts },
  { name: 'category-more', path: '/category/:category/p/:p', component: VuelogPosts },
  { name: 'post', path: '/category/:category/:year/:post', component: VuelogPost },
  { name: 'page', path: '/page/:page', component: VuelogPage },
  { name: 'oops', path: '/oops', component: VuelogOops },
  { path: '/', redirect: '/home' }, // TODO
  { path: '*', redirect: '/oops' }
]

var router = new VueRouter({
  // scrollBehavior: () => ({ y: 0 }),
  routes
})

router.afterEach(function (transition) {
  console.log(transition)
  window.scrollTo(0, 0)
  document.title = `Vuelog | ${Math.random()}` // TODO
})

export default router
