/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */
/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */
/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */
window.VUELOG_DATABASE = {

  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: 'Vuelog Demo',

    // The image displayed in site header right beside the brand.
    logo: './static/vuelog.svg',

    // The full URL where your site is hosted.
    home: 'https://myst729.github.io/Vuelog',

    // Path to the domain root that serves your site, starts with a slash (`/`). Set to `''` if your site is under domain root.
    base: '/Vuelog',

    // Vuelog interface language. Currently only support 'cn' and 'en'.
    lang: 'en',

    // Allow/disallow visitors to switch interface language.
    switchLang: true,

    // Enable the dedicated homepage, otherwise route `/` and `/home` to `/blog`.
    useHomepage: true,

    // Number of posts listed in a blog/category view.
    postsCount: 3,

    // The string to separate metadata from actual content in *.md files.
    metadataDelimiter: '---',

    // The string to annotate excerpt out of the complete content in *.md files.
    excerptDelimiter: '<!-- more -->',

    // Fill in the shortname to integrate Disqus with your blog. Leave it blank to turn it off.
    disqusShortname: '', // 'vuelog',

    // Fill in the account to integrate IntenseDebate with your blog. Leave it blank to turn it off.
    intenseDebateAccount: '48039cbd4d547c03251bf62282dfa0d6',

    // Fill in the uid to integrate LiveRe with your blog. Leave it blank to turn it off.
    livereUid: '', // 'MTAyMC8yNzE0NS8zNzM0',

    // Can be either `logo` or `line`, set to other values to disable the loading spinner.
    spinnerPattern: 'logo'
  },

  navigation: [
    {
      label: 'Guide',
      type: 'category',
      path: '/blog/guide'
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
      path: '', // (OPTIONAL) dropdown can be routable too if you set a valid route path
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
      slug: 'all-about-vuelog',
      titleless: false // (OPTIONAL) set this to true if you want to hide the title in page view (same for post)
    },
    {
      title: 'Changelog',
      slug: 'changelog',
      commentless: false // (OPTIONAL) set this to true if you want to disable comments for the particular page (same for post)
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
