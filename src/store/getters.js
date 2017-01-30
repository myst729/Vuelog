export function title (state) {
  return state.title
}

export function lang (state) {
  return state.lang
}

export function menu (state) {
  return state.menu
}

export function system (state) {
  return state.system
}

export function config (state) {
  return state.database.config
}

export function languages (state, getters) {
  var selectedLangs = getters.config.selectedLangs
  if (selectedLangs && selectedLangs.length) {
    var selectedLanguages = {}
    selectedLangs.forEach(lang => {
      if (state.languages[lang]) {
        selectedLanguages[lang] = state.languages[lang]
      }
    })
    return selectedLanguages
  }
  return state.languages
}

export function navigation (state) {
  return state.database.navigation
}

export function pages (state) {
  return state.database.pages
    .filter(page => !page.draft)
    .map(page => {
      page.markdown = './userdata/pages/' + page.slug + '.md'
      return page
    })
}

export function categories (state) {
  return state.database.categories
}

export function posts (state, getters) {
  var categoriesHash = {}
  getters.categories.forEach(category => {
    categoriesHash[category.slug] = category.title
  })

  return state.database.posts
    .filter(post => !post.draft)
    .map(post => {
      post.year = new Date(post.date).getFullYear()
      post.markdown = './userdata/posts/' + post.year + '/' + post.slug + '.md'
      post.categoryTitle = categoriesHash[post.category]
      return post
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function postsByCategory (state, getters) {
  return getters.categories
    .map(category => {
      return {
        slug: category.slug,
        title: category.title,
        posts: getters.posts
          .filter(post => post.category === category.slug)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
      }
    })
}

export function postsByYear (state, getters) {
  const years = [...new Set(getters.posts.map(post => post.year))]
  return years
    .sort((a, b) => b - a)
    .map(year => {
      return {
        year,
        posts: getters.posts
          .filter(post => post.year === year)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
      }
    })
}
