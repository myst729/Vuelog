var VUELOG_DATABASE = {
  title: 'Vuelog Demo',
  base: 'https://myst729.github.io/Vuelog/',
  logo: './static/img/logo.svg',
  posts: './posts',
  pagenum: 2,
  sitemap: [
    {
      title: 'Lorem Ipsum',
      path: '/lorem-ipsum',
      type: 'category',
      children: [
        '/lorem-ipsum/2016/lorem-ipsum-samples',
        '/lorem-ipsum/2015/lorem-ipsum-on-wikipedia',
        '/lorem-ipsum/2015/lorem-ipsum-demystified'
      ]
    },
    {
      title: 'Chandeen',
      path: '/chandeen',
      type: 'category',
      children: [
        '/chandeen/2012/chandeen-on-wikipedia'
      ]
    },
    {
      title: 'Talk Is Cheap',
      path: '/talk-is-cheap',
      type: 'page'
    },
    {
      title: 'Links',
      type: 'dropdown',
      children: [
        {
          title: 'Weibo',
          path: 'http://weibo.com/myst729',
          type: 'outgoing'
        },
        {
          title: 'GitHub',
          path: 'https://github.com/myst729',
          type: 'outgoing'
        },
        {
          title: 'StackOverflow',
          path: 'https://stackoverflow.com/users/1032492',
          type: 'outgoing'
        }
      ]
    }
  ]
}
