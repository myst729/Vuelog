import { languages } from '@/i18n/locales'
import {
  documentTitle,
  systemLanguage,
  sideMenu
} from '@/store/actions'

describe('Store: actions', () => {
  it('Document title dispatched with `Qwerty`', done => {
    const state = {
      title: ''
    }
    const commit = (type, payload) => {
      expect(type).toBe('setDocumentTitle')
      expect(payload.title).toBe('Qwerty')
      done()
    }
    documentTitle({ commit, state }, 'Qwerty')
  })

  it('System language dispatched with `zh-CN`', done => {
    const state = {
      lang: '',
      database: {
        config: { defaultLang: 'en-US' }
      },
      languages
    }
    const commit = (type, payload) => {
      expect(type).toBe('setSystemLanguage')
      expect(payload.lang).toBe('zh-CN')
      done()
    }
    systemLanguage({ commit, state }, 'zh-CN')
  })

  it('System language dispatched with `fr-FR`', done => {
    const state = {
      lang: '',
      database: {
        config: { defaultLang: 'en-US' }
      },
      languages
    }
    const commit = (type, payload) => {
      expect(type).toBe('setSystemLanguage')
      expect(payload.lang).toBe('en-US')
      done()
    }
    systemLanguage({ commit, state }, 'fr-FR')
  })

  it('Side menu visibility dispatched with `false`', done => {
    const state = { menu: true }
    const commit = (type, payload) => {
      expect(type).toBe('setSideMenu')
      expect(payload.visibility).toBe(false)
      done()
    }
    sideMenu({ commit, state }, false)
  })
})
