window.VUELOG_DATABASE = {

  // DO NOT TOUCH THIS PART!
  system: {
    name: 'Vuelog',
    description: 'A backend-free blog system built on top of Vue.js',
    version: '0.5.0',
    author: 'Leo Deng',
    project: 'https://github.com/myst729/Vuelog',
    release: 'https://github.com/myst729/Vuelog/releases/tag/0.5.0',
    logo: './static/vuelog.svg'
  },

  // Edit your site from here
  deployment: {
    title: 'Vuelog Demo',
    home: 'https://myst729.github.io/Vuelog/',
    logo: './static/vuelog.svg',
    perPage: 3,       // How many posts are listed in a blog/category view
    useHomepage: true // If a dedicated homepage isn't specified, it'll route to `/blog`
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
    },
    {
      title: 'Empty',
      slug: 'empty'
    }
  ],

  posts: [
    {
      title: 'How to add a post or page?',
      slug: 'how-to-add-a-post-or-page',
      category: 'guide',
      date: '2016-04-16'
    },
    {
      title: 'The structure of Vuelog',
      slug: 'the-structure-of-vuelog',
      category: 'guide',
      date: '2016-04-14'
    },
    {
      title: 'The (so-called) database',
      slug: 'the-so-called-database',
      category: 'guide',
      date: '2016-04-12'
    },
    {
      title: 'Talk is cheap, show me the styles!',
      slug: 'the-styles',
      category: 'guide',
      date: '2016-04-11'
    },
    {
      title: 'Using Disqus comment service',
      slug: 'using-disqus-comment-service',
      category: 'guide',
      date: '2016-04-10'
    },
    {
      title: 'Using Algolia search service',
      slug: 'using-algolia-search-service',
      category: 'guide',
      date: '2016-04-09'
    },
    {
      title: 'Vuelog hacker’s guide',
      slug: 'vuelog-hackers-guide',
      category: 'guide',
      date: '2016-04-08'
    }
  ]

}
