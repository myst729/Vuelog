/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */

window.VUELOG_DATABASE = {

  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: {'en-US': 'Vuelog Dev', 'zh-CN': 'Vuelog 开发版'},

    // The image displayed in site header right beside the brand.
    logo: './static/vuelog.svg',

    // The full URL where your site is hosted.
    home: 'http://localhost:8080',

    // Path to the domain root that serves your site, starts and ends with slash (`/`). Set to `'/'` if your site is under domain root.
    base: '/',

    // The path to route to when you visit `/`, set to `/home`, `/blog` or other paths at your need.
    defaultPath: '/home',

    // Whether footer is visible on `defaultPath` or not.
    defaultFooter: false,

    // Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
    defaultLang: 'en-US',

    // Allow/disallow visitors to switch interface language.
    switchLang: true,

    // Number of posts listed in a blog/category view.
    postsCount: 3,

    // Fill in the shortname to integrate Disqus with your blog. Leave it blank to turn it off.
    disqusShortname: '', // 'vuelog',

    // Fill in the account to integrate IntenseDebate with your blog. Leave it blank to turn it off.
    intenseDebateAccount: '', // '48039cbd4d547c03251bf62282dfa0d6',

    // Fill in the uid to integrate LiveRe with your blog. Leave it blank to turn it off.
    livereUid: '' // 'MTAyMC8yNzE0NS8zNzM0'
  },

  navigation: [
    {
      label: {'en-US': 'Guide', 'zh-CN': '指南'},
      type: 'category',
      path: '/blog/guide'
    },
    {
      label: {'en-US': 'About', 'zh-CN': '关于'},
      type: 'page',
      path: '/page/all-about-vuelog'
    },
    {
      label: {'en-US': 'Changelog', 'zh-CN': '变更日志'},
      type: 'page',
      path: '/page/changelog'
    },
    {
      label: {'en-US': 'Archive', 'zh-CN': '归档'},
      type: 'archive',
      path: '/archive'
    },
    {
      label: {'en-US': 'Links', 'zh-CN': '链接'},
      type: 'dropdown',
      path: '', // (OPTIONAL) dropdown can be routable too if you set a valid route path
      children: [
        {
          label: {'en-US': 'Weibo', 'zh-CN': '微博'},
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
      title: {'en-US': 'All about Vuelog', 'zh-CN': '关于 Vuelog 的一切'},
      slug: 'all-about-vuelog',
      titleless: false // (OPTIONAL) set this to true if you want to hide the title in page view (same for post)
    },
    {
      title: {'en-US': 'Changelog', 'zh-CN': '变更日志'},
      slug: 'changelog',
      commentless: false, // (OPTIONAL) set this to true if you want to disable comments for the particular page (same for post)
      exclude: true       // (OPTIONAL) set this to true if you want to exclude the particular page from archive view (page only)
    }
  ],

  categories: [
    {
      title: {'en-US': 'Guide', 'zh-CN': '指南'},
      slug: 'guide'
    },
    {
      title: {'en-US': 'Showcase', 'zh-CN': '演示'},
      slug: 'showcase'
    }
  ],

  posts: [
    // {
    //   title: '只有一种语言',
    //   slug: 'a-post-with-one-language-tag',
    //   category: 'guide',
    //   date: '2017-01-10'
    // },
    // {
    //   title: {'en-US': 'A multilingual post', 'zh-CN': '多语言的贴子'},
    //   slug: 'a-multilingual-post',
    //   category: 'guide',
    //   date: '2017-01-09'
    // },
    {
      title: 'This post has multiple parts',
      slug: 'this-post-has-multiple-parts',
      category: 'guide',
      date: '2017-01-05'
    },
    {
      title: 'This post is invisible',
      slug: 'this-post-is-invisible',
      category: 'guide',
      date: '2016-12-31',
      draft: true // (OPTIONAL) set this to true if you want to make the particular post invisible in your site (same for page)
    },
    {
      title: 'How to add a post or page?',
      slug: 'how-to-add-a-post-or-page',
      category: 'guide',
      date: '2016-10-21'
    },
    {
      title: 'The (so-called) database',
      slug: 'the-so-called-database',
      category: 'guide',
      date: '2016-10-20'
    },
    {
      title: 'The structure of Vuelog',
      slug: 'the-structure-of-vuelog',
      category: 'guide',
      date: '2016-10-20'
    },
    {
      title: 'Show me the styles!',
      slug: 'show-me-the-styles',
      category: 'guide',
      date: '2016-10-19'
    },
    {
      title: 'Using social commenting services',
      slug: 'using-social-commenting-services',
      category: 'guide',
      date: '2016-04-10'
    },
    {
      title: '[ONHOLD] Using Algolia search service',
      slug: 'using-algolia-search-service',
      category: 'guide',
      date: '2016-04-09'
    },
    {
      title: '[TODO] Vuelog hacker’s guide',
      slug: 'vuelog-hackers-guide',
      category: 'guide',
      date: '2016-04-08'
    }
  ]

}
