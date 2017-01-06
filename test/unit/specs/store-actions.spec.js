import 'userdata/database'
import { locales } from 'src/i18n/locales'
import {
  documentTitle,
  systemLanguage,
  sideMenu
} from 'src/store/actions'

describe('Store: actions', () => {
  it('Document title dispatched with `Qwerty`', done => {
    const state = {
      title: '',
      database: {
        config: { brand: 'Vuelog Test' }
      }
    }
    const commit = (type, payload) => {
      expect(type).to.equal('setDocumentTitle')
      expect(payload.title).to.equal('Vuelog Test | Qwerty')
      done()
    }
    documentTitle({ commit, state }, 'Qwerty')
  })

  it('Document title dispatched with nothing', done => {
    const state = {
      title: '',
      database: {
        config: { brand: 'Vuelog Test' }
      }
    }
    const commit = (type, payload) => {
      expect(type).to.equal('setDocumentTitle')
      expect(payload.title).to.equal('Vuelog Test')
      done()
    }
    documentTitle({ commit, state })
  })

  it('System language dispatched with `zh-CN`', done => {
    const state = {
      lang: '',
      database: {
        config: { lang: 'en-US' }
      },
      locales
    }
    const commit = (type, payload) => {
      expect(type).to.equal('setSystemLanguage')
      expect(payload.lang).to.equal('zh-CN')
      done()
    }
    systemLanguage({ commit, state }, 'zh-CN')
  })

  it('System language dispatched with `fr-FR`', done => {
    const state = {
      lang: '',
      database: {
        config: { lang: 'en-US' }
      },
      locales
    }
    const commit = (type, payload) => {
      expect(type).to.equal('setSystemLanguage')
      expect(payload.lang).to.equal('en-US')
      done()
    }
    systemLanguage({ commit, state }, 'fr-FR')
  })

  it('Side menu visibility dispatched with `false`', done => {
    const state = { menu: true }
    const commit = (type, payload) => {
      expect(type).to.equal('setSideMenu')
      expect(payload.visibility).to.equal(false)
      done()
    }
    sideMenu({ commit, state }, false)
  })
})
