/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */

window.VUELOG_DATABASE = {

  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: 'Vuelog',

    // The image displayed in site header right beside the brand.
    logo: './static/vuelog.svg',

    // The full URL where your site is hosted.
    home: 'https://myst729.github.io/Vuelog',

    // Path to the domain root that serves your site, starts and ends with slash (`/`).
    // Set to `'/'` if your site is under domain root.
    base: '/Vuelog/',

    // The path to route to when you visit `/`.
    // Set to `/home`, `/blog` or a valid path at your need.
    homePath: '/home',

    // Whether footer is visible on `homePath` or not.
    homeFooter: false,

    // Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
    defaultLang: 'en-US',

    // Allow/disallow visitors to switch interface language.
    switchLang: true,

    // Available languages for switching. Must be a subset of supported languages, or leave empty.
    selectedLangs: [],

    // Number of posts listed in a blog/category view.
    postsCount: 3,

    // Fill in the shortname to integrate Disqus with your blog.
    disqusShortname: '',

    // Fill in the account to integrate IntenseDebate with your blog.
    intenseDebateAccount: '',

    // Fill in the uid to integrate LiveRe with your blog.
    livereUid: '',

    // Options for marked, see https://github.com/chjj/marked#options-1 for detail
    markedOptions: {},
  },

  navigation: [
    {
      label: {'en-US': 'Guide', 'zh-CN': '指南'},
      type: 'page',
      path: '/page/guide'
    },
    {
      label: {'en-US': 'About', 'zh-CN': '关于'},
      type: 'page',
      path: '/page/about'
    },
    {
      label: {'en-US': 'Showcase', 'zh-CN': '示例'},
      type: 'category',
      path: '/blog/showcase'
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
      title: {'en-US': 'Vuelog Guide', 'zh-CN': 'Vuelog 指南'},
      slug: 'guide',
      exclude: true,      // (OPTIONAL) `true` to exclude the page from archive view
      titleless: false,   // (OPTIONAL) `true` to hide the title in page view
      commentless: false, // (OPTIONAL) `true` to disable comments for the page
      draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
    },
    {
      title: {'en-US': 'About Vuelog', 'zh-CN': '关于 Vuelog'},
      slug: 'about'
    },
    {
      title: {'en-US': 'Changelog', 'zh-CN': '变更日志'},
      slug: 'changelog'
    }
  ],

  categories: [
    {
      title: {'en-US': 'Documentation', 'zh-CN': '文档'},
      slug: 'docs'
    },
    {
      title: {'en-US': 'Showcase', 'zh-CN': '示例'},
      slug: 'showcase'
    }
  ],

  posts: [
    /* 2017 */
    {
      title: {'en-US': 'Multiple languages support', 'zh-CN': '多语言支持'},
      slug: 'multiple-languages-support',
      category: 'docs',
      date: '2017-01-24'
    },
    {
      title: {'en-US': 'Use social commenting services', 'zh-CN': '使用社会化评论服务'},
      slug: 'use-social-commenting-services',
      category: 'docs',
      date: '2017-01-19'
    },
    {
      title: {'en-US': 'Insert code blocks with syntax highlight', 'zh-CN': '插入语法高亮的代码块'},
      slug: 'insert-code-blocks-with-syntax-highlight',
      category: 'docs',
      date: '2017-01-18'
    },
    {
      title: {'en-US': 'Author posts or pages', 'zh-CN': '编写文章或页面'},
      slug: 'author-posts-or-pages',
      category: 'docs',
      date: '2017-01-13'
    },

    {
      title: {'en-US': 'Add posts or pages', 'zh-CN': '新建文章或页面'},
      slug: 'add-posts-or-pages',
      category: 'docs',
      date: '2017-01-12'
    },
    {
      title: {'en-US': 'Customize navigation menu', 'zh-CN': '自定义导航菜单'},
      slug: 'customize-navigation-menu',
      category: 'docs',
      date: '2017-01-11'
    },
    {
      title: {'en-US': 'Customize the site', 'zh-CN': '自定义站点'},
      slug: 'customize-the-site',
      category: 'docs',
      date: '2017-01-10'
    },
    /* 2016 */
    {
      title: {'en-US': 'File structure of Vuelog', 'zh-CN': 'Vuelog 文件结构'},
      slug: 'file-structure-of-vuelog',
      category: 'docs',
      date: '2016-10-20'
    },
    {
      title: {'en-US': 'Style examples', 'zh-CN': '样式示例'},
      slug: 'style-examples',
      category: 'showcase',
      date: '2016-10-19'
    }
  ]

}
