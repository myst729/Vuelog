function formatTime (date, format) {
  return `${date}`.replace(/^(\d{4})(\d{2})(\d{2})$/, ($, y, m, d) => {
    return {
      'YYYY': `${y}`,
      'YYYY-MM': `${y}-${m}`,
      'YYYY/MM': `${y}/${m}`,
      'YYYY-MM-DD': `${y}-${m}-${d}`,
      'YYYY/MM/DD': `${y}/${m}/${d}`
    }[format]
  })
}

function classifyAllPosts (database) {
  var categories = database.categories
  var posts = database.posts
  var hash = {}
  var all = []
  var byCategory = {}
  var byYear = {}

  categories.forEach((category) => {
    hash[category.slug] = category
  })

  posts.forEach((post) => {
    var category = hash[post.category]
    post.year = formatTime(post.date, 'YYYY')
    post.displayTime = formatTime(post.date, database.deployment.displayTime)
    post.routeTime = formatTime(post.date, database.deployment.routeTime)
    post.categoryTitle = category.title

    all.push(post)

    if (byCategory[category.slug] === undefined) {
      byCategory[category.slug] = {
        slug: category.slug,
        title: category.title,
        posts: []
      }
    }
    byCategory[category.slug].posts.push(post)

    if (byYear[post.year] === undefined) {
      byYear[post.year] = {
        year: +post.year,
        posts: []
      }
    }
    byYear[post.year].posts.push(post)
  })

  return {
    'all': all,
    'byCategory': byCategory,
    'byYear': byYear
  }
}

export default {
  formatTime,
  classifyAllPosts
}
