import Vue from 'vue'
import Vuelog from 'src/Vuelog'
import VuelogArchive from 'src/components/VuelogArchive'
import VuelogContent from 'src/components/VuelogContent'
import VuelogHeader from 'src/components/VuelogHeader'
import VuelogHome from 'src/components/VuelogHome'
import VuelogNavigation from 'src/components/VuelogNavigation'
import VuelogPage from 'src/components/VuelogPage'
import VuelogOops from 'src/components/VuelogOops'
import VuelogPost from 'src/components/VuelogPost'
import VuelogPosts from 'src/components/VuelogPosts'
import VuelogSearch from 'src/components/VuelogSearch'
import utils from 'src/utils.js'

describe('Vuelog.vue', () => {
  it('should have a `update-document-title` event handler', () => {
    console.log(Vuelog.events)
    expect(typeof Vuelog.events['update-document-title']).to.equal('function')
  })
})

describe('VuelogArchive.vue', () => {
  it('should initialize correct data', () => {
    expect(typeof VuelogArchive.data).to.equal('function')
    const defaultData = VuelogArchive.data()
    expect(defaultData.displayType).to.equal('all')
  })
})

describe('VuelogContent.vue', () => {
  it('should initialize correct data', () => {
    expect(typeof VuelogContent.data).to.equal('function')
    const defaultData = VuelogContent.data()
    expect(defaultData.showTitle).to.equal(true)
  })
})

describe('VuelogHeader.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><vuelog-header></vuelog-header></div>',
      components: { VuelogHeader }
    }).$mount()
    const header = vm.$el.querySelector('.header')
    expect(header).to.not.equal(null)
    expect(header.querySelector('.header-logo')).to.not.equal(null)
  })
})

describe('VuelogHome.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><vuelog-home></vuelog-home></div>',
      components: { VuelogHome }
    }).$mount()
    expect(vm.$el.querySelector('.home-logo')).to.not.equal(null)
  })
})

describe('VuelogNavigation.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><vuelog-navigation></vuelog-navigation></div>',
      components: { VuelogNavigation }
    }).$mount()
    expect(vm.$el.querySelector('.header-nav')).to.not.equal(null)
  })
})

describe('VuelogOops.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><vuelog-oops></vuelog-oops></div>',
      components: { VuelogOops }
    }).$mount()
    expect(vm.$el.querySelector('a.button').textContent).to.contain('Take Me Home')
  })
})

describe('VuelogPage.vue', () => {
  it('should initialize correct data', () => {
    expect(typeof VuelogPage.data).to.equal('function')
    const defaultData = VuelogPage.data()
    expect(defaultData.type).to.equal('page')
  })
})

describe('VuelogPost.vue', () => {
  it('should initialize correct data', () => {
    expect(typeof VuelogPost.data).to.equal('function')
    const defaultData = VuelogPost.data()
    expect(defaultData.type).to.equal('post')
  })
})

describe('VuelogPosts.vue', () => {
  it('should initialize correct data', () => {
    expect(typeof VuelogPosts.data).to.equal('function')
    const defaultData = VuelogPosts.data()
    expect(defaultData.pathname).to.equal('blog')
    expect(defaultData.type).to.equal('post')
  })
  it('should load VuelogContent component', () => {
    expect(typeof VuelogPosts.components.VuelogContent).to.equal('object')
  })
})

describe('VuelogSearch.vue', () => {
  it('should render correct input field', () => {
    const vm = new Vue({
      template: '<div><vuelog-search :settings="settings"></vuelog-search></div>',
      components: { VuelogSearch },
      data () {
        return {
          settings: {
            enable: false,
            appId: 'appId',
            apiKey: 'apiKey',
            indexName: 'Vuelog',
            displayKey: 'name'
          }
        }
      }
    }).$mount()
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('#search-query')).to.not.equal(null)
    })
  })
})

describe('utils', () => {
  it('should format correct date', () => {
    const date = utils.formatTime(20160412, 'YYYY/MM/DD')
    date.should.equal('2016/04/12')
  })
})
