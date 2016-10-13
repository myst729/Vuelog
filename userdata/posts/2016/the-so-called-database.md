title: The (so-called) database
date: 2016-04-12
---
Let's take a look at the most important file of your Vuelog deployment - `database.js`:

```js
var VUELOG_DATABASE = {

  // DO NOT touch this part
  system: {
    ...
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
    ...
  },

  navigation: [
    { label: 'Blog', type: 'blog', path: '/blog' },
    { label: 'Archive', type: 'archive', path: '/archive' },
    { label: 'Guide', type: 'category', path: '/category/guide' },
    { label: 'Cheatsheet', type: 'category', path: '/category/cheatsheet' },
    { label: 'About', type: 'page', path: '/page/all-about-vuelog' },
    {
      label: 'Links',
      type: 'dropdown',
      children: [
        { label: 'Weibo', type: 'outgoing', link: 'http://weibo.com/myst729' },
        { label: 'GitHub', type: 'outgoing', link: 'https://github.com/myst729' },
        { label: 'StackOverflow', type: 'outgoing', link: 'https://stackoverflow.com/users/1032492' }
      ]
    }
  ],

  pages: [
    { title: 'All about Vuelog', slug: 'all-about-vuelog' }
  ],

  categories: [
    { title: 'Guide', slug: 'guide' },
    { title: 'Cheatsheet', slug: 'cheatsheet' }
  ],

  posts: [
    { title: 'How to add a post or page?', slug: 'how-to-add-a-post-or-page', category: 'guide', date: 20160416 },
    { title: 'The structure of Vuelog', slug: 'the-structure-of-vuelog', category: 'guide', date: 20160414 },
    { title: 'The (so-called) database', slug: 'the-so-called-database', category: 'guide', date: 20160412 },
    { title: 'Talk is cheap, show me the styles!', slug: 'the-styles', category: 'guide', date: 20160411 },
    { title: 'This is for the hackers', slug: 'this-is-for-the-hackers', category: 'cheatsheet', date: 20160410 }
  ]

}
```

<!-- more -->

The purpose of each section:

- `system`: Meta information of the Vuelog build. Don't touch it.
- `deployment`: Overall settings of your site. Please read inline comments.
- `search`: (Not finished yet) Vuelog uses Algolia to enable the in-site search. Modify the settings here if you need it.
- `navigation`: This determines the navigation menu in header area. You can link to any thing here, even a single post. These types need to care:
  - `category`: The path must be `/category/${category-slug}`.
  - `page`: The path must be `/page/${page-slug}`.
  - `post`: The path must be `/category/${category-slug}/${time}/${post-slug}`, time should be in the route time format.
  - `dropdown`: Used for create a sub menu. Must provide a `children` array of navigation links.
  - `outgoing`: Only used for links outside your site. New target will pop up in a new browser window or tab.
- `pages`: Entries of your pages. Must specify the title and slug (markdown file name).
- `categories`: Entries of your categories. Must specify the title and slug (category folder name).
- `posts`: Entries of your posts. Must specify the title, slug (markdown file name), category slug (category folder name) and the date (in a 8-digit format).
