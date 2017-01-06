import 'userdata/database'
import {
  setDocumentTitle,
  setSystemLanguage,
  setSideMenu
} from 'src/store/mutations'

describe('Store: mutations', () => {
  it('Set document title to `Vuelog`', () => {
    const state = { title: '' }
    setDocumentTitle(state, { title: 'Vuelog' })
    expect(state.title).to.equal('Vuelog')
  })

  it('Clear document title', () => {
    const state = { title: 'Vuelog' }
    setDocumentTitle(state, { title: '' })
    expect(state.title).to.equal('')
  })

  it('Set system language to `en-US`', () => {
    const state = { lang: '' }
    setSystemLanguage(state, { lang: 'en-US' })
    expect(state.lang).to.equal('en-US')
  })

  it('Set system language to `zh-CN`', () => {
    const state = { lang: '' }
    setSystemLanguage(state, { lang: 'zh-CN' })
    expect(state.lang).to.equal('zh-CN')
  })

  it('Hide side menu', () => {
    const state = { menu: '' }
    setSideMenu(state, { visibility: false })
    expect(state.menu).to.equal(false)
  })

  it('Show side menu', () => {
    const state = { menu: '' }
    setSideMenu(state, { visibility: true })
    expect(state.menu).to.equal(true)
  })
})
