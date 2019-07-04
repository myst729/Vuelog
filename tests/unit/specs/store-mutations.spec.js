import {
  setDocumentTitle,
  setSystemLanguage,
  setSideMenu
} from '@/store/mutations'

describe('Store: mutations', () => {
  it('Set document title to `Vuelog`', () => {
    const state = { title: '' }
    setDocumentTitle(state, { title: 'Vuelog' })
    expect(state.title).toBe('Vuelog')
  })

  it('Clear document title', () => {
    const state = { title: 'Vuelog' }
    setDocumentTitle(state, { title: '' })
    expect(state.title).toBe('')
  })

  it('Set system language to `en-US`', () => {
    const state = { lang: '' }
    setSystemLanguage(state, { lang: 'en-US' })
    expect(state.lang).toBe('en-US')
  })

  it('Set system language to `zh-CN`', () => {
    const state = { lang: '' }
    setSystemLanguage(state, { lang: 'zh-CN' })
    expect(state.lang).toBe('zh-CN')
  })

  it('Hide side menu', () => {
    const state = { menu: '' }
    setSideMenu(state, { visibility: false })
    expect(state.menu).toBe(false)
  })

  it('Show side menu', () => {
    const state = { menu: '' }
    setSideMenu(state, { visibility: true })
    expect(state.menu).toBe(true)
  })
})
