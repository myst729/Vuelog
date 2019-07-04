import {
  title,
  lang,
  menu,
  system,
  config,
  languages,
  navigation,
  pages,
  categories,
  posts,
  postsByCategory,
  postsByYear
} from '@/store/getters'

describe('Store: getters', () => {
  it('Title', () => {
    const state = { title: 'Apple' }
    const result = title(state)
    expect(result).toBe('Apple')
  })

  it('Language', () => {
    const state = { lang: 'fr-FR' }
    const result = lang(state)
    expect(result).toBe('fr-FR')
  })

  it('Side menu visibility', () => {
    const state = { menu: false }
    const result = menu(state)
    expect(result).toBe(false)
  })

  it('System settings', () => {
    const state = {
      system: { project: 'Vuelog Test', version: '2016' }
    }
    const result = system(state)
    expect(result).toEqual({ project: 'Vuelog Test', version: '2016' })
  })

  it('Configurations', () => {
    const state = {
      database: {
        config: { project: 'Vuelog Test', version: '2016' }
      }
    }
    const result = config(state)
    expect(result).toEqual({ project: 'Vuelog Test', version: '2016' })
  })

  it('Languages: default', () => {
    const state = {
      languages: { 'en-US': 'English', 'fr-FR': 'Français', 'it-IT': 'Italiano', 'zh-CN': '简体中文' }
    }
    const result = languages(state, {
      config: {
        selectedLangs: []
      }
    })
    expect(result).toEqual({ 'en-US': 'English', 'fr-FR': 'Français', 'it-IT': 'Italiano', 'zh-CN': '简体中文' })
  })

  it('Languages: trimmed', () => {
    const state = {
      languages: { 'en-US': 'English', 'fr-FR': 'Français', 'it-IT': 'Italiano', 'zh-CN': '简体中文' }
    }
    const result = languages(state, {
      config: {
        selectedLangs: ['en-US', 'zh-CN']
      }
    })
    expect(result).toEqual({ 'en-US': 'English', 'zh-CN': '简体中文' })
  })

  it('Languages: trimmed with invalid keys', () => {
    const state = {
      languages: { 'en-US': 'English', 'fr-FR': 'Français', 'it-IT': 'Italiano', 'zh-CN': '简体中文' }
    }
    const result = languages(state, {
      config: {
        selectedLangs: ['en-US', 'de-DE']
      }
    })
    expect(result).toEqual({ 'en-US': 'English' })
  })

  it('Navigation', () => {
    const state = {
      database: {
        navigation: { project: 'Vuelog Test', version: '2016' }
      }
    }
    const result = navigation(state)
    expect(result).toEqual({ project: 'Vuelog Test', version: '2016' })
  })

  it('Pages', () => {
    const state = {
      database: {
        pages: [
          { title: 'All about Vuelog', slug: 'all-about-vuelog', titleless: false },
          { title: 'Changelog', slug: 'changelog', commentless: false }
        ]
      }
    }
    const result = pages(state)
    expect(result).toEqual([
      {
        title: 'All about Vuelog',
        slug: 'all-about-vuelog',
        titleless: false,
        markdown: './userdata/pages/all-about-vuelog.md'
      },
      {
        title: 'Changelog',
        slug: 'changelog',
        commentless: false,
        markdown: './userdata/pages/changelog.md'
      }
    ])
  })

  it('Categories', () => {
    const state = {
      database: {
        categories: [
          { title: 'Guide', slug: 'guide' },
          { title: 'Empty', slug: 'empty' }
        ]
      }
    }
    const result = categories(state)
    expect(result).toEqual([
      { title: 'Guide', slug: 'guide' },
      { title: 'Empty', slug: 'empty' }
    ])
  })

  it('Posts', () => {
    const state = {
      database: {
        categories: [
          { title: 'Guide', slug: 'guide' },
          { title: 'Empty', slug: 'empty' }
        ],
        posts: [
          { title: 'How to add a post or page?', slug: 'how-to-add-a-post-or-page', category: 'guide', date: '2016-10-21' },
          { title: 'The (so-called) database', slug: 'the-so-called-database', category: 'guide', date: '2015-10-20' }
        ]
      }
    }
    const cats = categories(state)
    const result = posts(state, {
      categories: cats
    })
    expect(result).toEqual([
      {
        title: 'How to add a post or page?',
        slug: 'how-to-add-a-post-or-page',
        category: 'guide',
        date: '2016-10-21',
        year: 2016,
        markdown: './userdata/posts/2016/how-to-add-a-post-or-page.md',
        categoryTitle: 'Guide'
      },
      {
        title: 'The (so-called) database',
        slug: 'the-so-called-database',
        category: 'guide',
        date: '2015-10-20',
        year: 2015,
        markdown: './userdata/posts/2015/the-so-called-database.md',
        categoryTitle: 'Guide'
      }
    ])
  })

  it('Posts by category', () => {
    const state = {
      database: {
        categories: [
          { title: 'Guide', slug: 'guide' },
          { title: 'Empty', slug: 'empty' }
        ],
        posts: [
          { title: 'How to add a post or page?', slug: 'how-to-add-a-post-or-page', category: 'guide', date: '2016-10-21' },
          { title: 'The (so-called) database', slug: 'the-so-called-database', category: 'guide', date: '2015-10-20' }
        ]
      }
    }
    const cats = categories(state)
    const pos = posts(state, {
      categories: cats
    })
    const result = postsByCategory(state, {
      posts: pos,
      categories: cats
    })
    expect(result).toEqual([
      {
        title: 'Guide',
        slug: 'guide',
        posts: [
          {
            title: 'How to add a post or page?',
            slug: 'how-to-add-a-post-or-page',
            category: 'guide',
            date: '2016-10-21',
            year: 2016,
            markdown: './userdata/posts/2016/how-to-add-a-post-or-page.md',
            categoryTitle: 'Guide'
          },
          {
            title: 'The (so-called) database',
            slug: 'the-so-called-database',
            category: 'guide',
            date: '2015-10-20',
            year: 2015,
            markdown: './userdata/posts/2015/the-so-called-database.md',
            categoryTitle: 'Guide'
          }
        ]
      },
      {
        title: 'Empty',
        slug: 'empty',
        posts: []
      }
    ])
  })

  it('Posts by year', () => {
    const state = {
      database: {
        categories: [
          { title: 'Guide', slug: 'guide' },
          { title: 'Empty', slug: 'empty' }
        ],
        posts: [
          { title: 'Show me the styles!', slug: 'show-me-the-styles', category: 'guide', date: '2015-10-19' },
          { title: 'How to add a post or page?', slug: 'how-to-add-a-post-or-page', category: 'guide', date: '2016-10-21' },
          { title: 'The (so-called) database', slug: 'the-so-called-database', category: 'guide', date: '2015-10-20' }
        ]
      }
    }
    const cats = categories(state)
    const pos = posts(state, {
      categories: cats
    })
    const result = postsByYear(state, {
      posts: pos,
      categories: cats
    })
    expect(result).toEqual([
      {
        year: 2016,
        posts: [
          {
            title: 'How to add a post or page?',
            slug: 'how-to-add-a-post-or-page',
            category: 'guide',
            date: '2016-10-21',
            year: 2016,
            markdown: './userdata/posts/2016/how-to-add-a-post-or-page.md',
            categoryTitle: 'Guide'
          }
        ]
      },
      {
        year: 2015,
        posts: [
          {
            title: 'The (so-called) database',
            slug: 'the-so-called-database',
            category: 'guide',
            date: '2015-10-20',
            year: 2015,
            markdown: './userdata/posts/2015/the-so-called-database.md',
            categoryTitle: 'Guide'
          },
          {
            title: 'Show me the styles!',
            slug: 'show-me-the-styles',
            category: 'guide',
            date: '2015-10-19',
            year: 2015,
            markdown: './userdata/posts/2015/show-me-the-styles.md',
            categoryTitle: 'Guide'
          }
        ]
      }
    ])
  })
})
