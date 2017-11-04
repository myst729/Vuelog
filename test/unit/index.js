import Vue from 'vue'
Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require only helpers and vuex store.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('src', true, /\/(helpers|store)\//)
srcContext.keys().forEach(srcContext)
