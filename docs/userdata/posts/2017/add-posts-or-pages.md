title: Add posts or pages
category: docs
date: 2017-01-12
------------------------------------
### Add a page

To add a page, just put the markdown file in `/userdata/pages` folder.

```bash
userdata/
└── pages/
    └── all-about-vuelog.md
```

Then add a new entry in `pages` section in `userdata/database.js`.

```js
pages: [
  {
    title: {'en-US': 'About Vuelog', 'zh-CN': '关于 Vuelog'},
    slug: 'about',
    exclude: false,     // (OPTIONAL) `true` to exclude the page from archive view
    titleless: false,   // (OPTIONAL) `true` to hide the title in page view
    commentless: false, // (OPTIONAL) `true` to disable comments for the page
    draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
  }
]
```

There are 2 mandatory fields:

- Set `title` to the page’s title. Page title supports multiple languages, please read [multiple languages support](#/blog/docs/2017/multiple-languages-support) for more information.
- Set `slug` to the markdown file’s name (without extension).

There are 4 optional fields that accept boolean values:

- Set `exclude` to `true` will exclude the page from `/archive` list.
- Set `titleless` to `true` will hide the title in page view.
- Set `commentless` to `true` will turn off comments for the page, more on [use social commenting services](#/blog/docs/2017/use-social-commenting-services).
- Set `draft` to `true` will make the page inaccessible for visitors.

<blockquote class="tip">
  <p>`exclude` and `titleless` are useful if you set the page as your custom homepage.</p>
</blockquote>

### Add a categories

Posts are filed under categories. So, to create posts, you must have a category for it.

To add a category is simple, add a new entry to `categories` section in `userdata/database.js`.

```js
categories: [
  {
    title: {'en-US': 'Docs', 'zh-CN': '文档'},
    slug: 'docs'
  }
]
```

Both `title` and `slug` are mandatory. Category title also supports multiple languages.

### Add a post

Create yearly sub-directories under `/posts` directory, name them in **YYYY** format. Put the markdown files (extension must be **md**) in the yearly sub-directories.

```bash
userdata/
└── posts/
    ├── 2016/
    │   └── how-to-add-posts-or-pages.md
    └── 2017/
```

Then add a new entry in `posts` section in `userdata/database.js`. Set the file name (without extension) as the `slug` field.

```js
posts: [
  {
    title: 'Add posts or pages',
    slug: 'add-posts-or-pages',
    category: 'docs',
    date: '2017-01-12',
    titleless: false,   // (OPTIONAL) `true` to hide the title in page view
    commentless: false, // (OPTIONAL) `true` to disable comments for the page
    draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
  }
]
```

There are 4 mandatory fields:

- `title` and `slug` are similar as pages.
- `category` is the category’s `slug` value in which the post is filed under.
- `date` is the when the post is created, must be an [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) date format (**YYYY-MM-DD**).

There are 3 optional fields that accept boolean values:

- `titleless`, `commentless` and `draft` are similar as pages.
