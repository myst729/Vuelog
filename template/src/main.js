import Vue from 'vue'
import VueRouter from 'vue-router'

import Vuelog from './Vuelog'
import VuelogCategory from './components/VuelogCategory'
import VuelogPage from './components/VuelogPage'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({

  /*
   *  ========================================
   *  = Will refactor to following structure =
   *  ========================================
   *
   *  home-
   *    /
   *    /p/:pagenum
   *  blog- (by default it should redirect to /)
   *    /blog
   *    /blog/p/:pagenum
   *  archive- (similar as /blog but without excerpts, only a list of titles)
   *    /archive
   *    /archive/p/:pagenum
   *  category-
   *    /category/:category
   *    /category/:category/p/:pagenum
   *  post-
   *    /post/:category/:time/:title
   *    /post/:category/:time/:title/p/:pagenum
   *  page-
   *    /page/:title
   *    /page/:title/p/:pagenum
   *  404-
   *    /404
   */

  '/lorem-ipsum': {
    component: VuelogCategory
  },
  '/lorem-ipsum/page/:page': {
    name: '/lorem-ipsum',
    component: VuelogCategory
  },
  '/lorem-ipsum/:year/:title': {
    component: VuelogPage
  },
  '/chandeen': {
    component: VuelogCategory
  },
  '/chandeen/page/:page': {
    name: '/chandeen',
    component: VuelogCategory
  },
  '/chandeen/:year/:title': {
    component: VuelogPage
  },
  '/talk-is-cheap': {
    component: VuelogPage
  }
})

router.redirect({
  '/': '/lorem-ipsum',
  '/lorem-ipsum/page/1': '/lorem-ipsum',
  '/chandeen/page/1': '/chandeen',
  '*': '/lorem-ipsum'
})

router.start(Vuelog, 'vuelog')
