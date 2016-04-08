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

  '/articles': {
    component: VuelogCategory
  },
  '/articles/page/:page': {
    name: 'articles',
    component: VuelogCategory
  },
  '/articles/:year/:title': {
    name: 'article',
    component: VuelogPage
  },
  '/books': {
    component: VuelogPage
  },
  '/projects': {
    component: VuelogPage
  },
  '/slides': {
    component: VuelogPage
  },
  '/music': {
    component: VuelogPage
  }
})

router.redirect({
  '/': '/articles',
  '*': '/articles'
})

router.start(Vuelog, 'vuelog')
