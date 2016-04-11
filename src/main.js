import Vue from 'vue'
import VueRouter from 'vue-router'

import Vuelog from './Vuelog'
import VuelogHome from './components/VuelogHome'
import VuelogArchive from './components/VuelogArchive'
import VuelogPosts from './components/VuelogPosts'
import VuelogPost from './components/VuelogPost'
import VuelogPage from './components/VuelogPage'
import VuelogOops from './components/VuelogOops'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/archive': {
    name: 'archive',
    component: VuelogArchive
  },
  '/archive/year/:year': {
    name: 'archive-year',
    component: VuelogArchive
  },
  '/archive/category/:category': {
    name: 'archive-category',
    component: VuelogArchive
  },
  '/blog': {
    name: 'blog',
    component: VuelogPosts
  },
  '/blog/p/:p': {
    name: 'blog-more',
    component: VuelogPosts
  },
  '/category/:category': {
    name: 'category',
    component: VuelogPosts
  },
  '/category/:category/p/:p': {
    name: 'category-more',
    component: VuelogPosts
  },
  '/category/:category/:time/:post': {
    name: 'post',
    component: VuelogPost
  },
  /*
  TODO: if the content is too long, you can insert `<!-- next -->` to add a page break
  ====================================================================================
  '/category/:category/:time/:post/p/:p': {
    name: 'post-more',
    component: VuelogPost
  },
  */
  '/page/:page': {
    name: 'page',
    component: VuelogPage
  },
  /*
  TODO: if the content is too long, you can insert `<!-- next -->` to add a page break
  ====================================================================================
  '/page/:page/p/:p': {
    name: 'page-more',
    component: VuelogPage
  },
  */
  '/oops': {
    name: 'oops',
    component: VuelogOops
  }
})

/* global VUELOG_DATABASE */
if (VUELOG_DATABASE.deployment.useHomepage) {
  router.on('/', {
    name: 'home',
    component: VuelogHome
  })
} else {
  router.redirect({
    '/': '/blog',
    '/p/:p': '/blog/p/:p'
  })
}

router.redirect({
  '*': '/oops'
})

router.start(Vuelog, 'vuelog')
