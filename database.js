var VUELOG_DATABASE = {

  // DO NOT touch this part
  system: {
    name: 'Vuelog',
    description: 'A backend-free blog system built on top of Vue.js',
    version: '0.4.1',
    project: 'https://github.com/myst729/Vuelog',
    release: 'https://github.com/myst729/Vuelog/releases/tag/0.4.1',
    logo: './static/img/logo.svg',
    author: 'Leo Deng'
  },

  // Edit your site from here
  deployment: {
    title: 'Vuelog',
    url: 'https://myst729.github.io/Vuelog/',
    logo: './static/img/logo.svg',
    folder: './docs',          // The folder name where your source markdown files are stored
    perPage: 3,                // How many posts are listed in a blog/category view
    displayTime: 'YYYY-MM-DD', // 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'
    routeTime: 'YYYY',         // 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD', DO NOT include '/'
    useHomepage: true          // If a dedicated homepage isn't specified, it'll route to `/blog`
  },

  // Search functionality is served with Algolia
  search: {
    enable: false,
    appId: '',
    apiKey: '',
    indexName: '',
    displayKey: ''
  },

  navigation: [
    {
      label: 'Guide',
      type: 'category',
      path: '/category/guide'
    },
    {
      label: 'About',
      type: 'page',
      path: '/page/all-about-vuelog'
    },
    {
      label: 'Changelog',
      type: 'page',
      path: '/page/changelog'
    },
    {
      label: 'Archive',
      type: 'archive',
      path: '/archive'
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
      title: 'All about Vuelog',
      slug: 'all-about-vuelog'
    },
    {
      title: 'Changelog',
      slug: 'changelog'
    }
  ],

  categories: [
    {
      title: 'Guide',
      slug: 'guide'
    }
  ],

  posts: [
    {
      title: 'How to add a post or page?',
      slug: 'how-to-add-a-post-or-page',
      category: 'guide',
      date: 20160416
    },
    {
      title: 'The structure of Vuelog',
      slug: 'the-structure-of-vuelog',
      category: 'guide',
      date: 20160414
    },
    {
      title: 'The (so-called) database',
      slug: 'the-so-called-database',
      category: 'guide',
      date: 20160412
    },
    {
      title: 'Talk is cheap, show me the styles!',
      slug: 'the-styles',
      category: 'guide',
      date: 20160411
    },
    {
      title: 'Using Disqus comment service',
      slug: 'using-disqus-comment-service',
      category: 'guide',
      date: 20160410
    },
    {
      title: 'Using Algolia search service',
      slug: 'using-algolia-search-service',
      category: 'guide',
      date: 20160409
    },
    {
      title: 'Vuelog hacker’s guide',
      slug: 'vuelog-hackers-guide',
      category: 'guide',
      date: 20160408
    }
  ]

}
