var VUELOG_DATABASE = {

  // DO NOT touch this part
  system: {
    name: 'Vuelog',
    description: 'A backend-free blog system built on top of Vue.js',
    version: '0.3.0',
    project: 'https://github.com/myst729/Vuelog',
    release: 'https://github.com/myst729/Vuelog/releases',
    logo: './static/img/logo.svg',
    author: 'Leo Deng'
  },

  // Edit your site from here
  deployment: {
    title: 'Vuelog',
    url: 'https://myst729.github.io/Vuelog/',
    logo: './static/img/logo.svg',
    folder: './docs',
    perPage: 2,
    displayTime: 'YYYY-MM-DD', // 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'
    routeTime: 'YYYY', // 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD', DO NOT include '/'
    useHomepage: true
  },

  // Search functionality is served with Algolia
  search: {
    enable: true,
    appId: '',
    apiKey: '',
    indexName: '',
    displayKey: ''
  },

  navigation: [
    {
      label: 'Blog',
      type: 'blog',
      path: '/blog'
    },
    {
      label: 'Archive',
      type: 'archive',
      path: '/archive'
    },
    {
      label: 'Talk Is Cheap',
      type: 'page',
      path: '/page/talk-is-cheap'
    },
    {
      label: 'Links',
      type: 'dropdown',
      children: [
        {
          label: 'Weibo',
          type: 'outgoing',
          link: 'http://weibo.com/myst729'
        },
        {
          label: 'GitHub',
          type: 'outgoing',
          link: 'https://github.com/myst729'
        },
        {
          label: 'StackOverflow',
          type: 'outgoing',
          link: 'https://stackoverflow.com/users/1032492'
        }
      ]
    }
  ],

  pages: [
    {
      title: 'Talk Is Cheap',
      slug: 'talk-is-cheap'
    }
  ],

  categories: [
    {
      title: 'Chandeen',
      slug: 'chandeen'
    },
    {
      title: 'Lorem Ipsum',
      slug: 'lorem-ipsum'
    }
  ],

  posts: [
    {
      title: 'Lorem Ipsum Samples',
      slug: 'lorem-ipsum-samples',
      category: 'lorem-ipsum',
      date: 20160116
    },
    {
      title: 'Lorem Ipsum on Wikipedia',
      slug: 'lorem-ipsum-on-wikipedia',
      category: 'lorem-ipsum',
      date: 20150214
    },
    {
      title: 'Lorem Ipsum Demystified',
      slug: 'lorem-ipsum-demystified',
      category: 'lorem-ipsum',
      date: 20150212
    },
    {
      title: 'Chandeen on Wikipedia',
      slug: 'chandeen-on-wikipedia',
      category: 'chandeen',
      date: 20120214
    }
  ]

}
