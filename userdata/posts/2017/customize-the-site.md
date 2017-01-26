title: Customize the site
category: docs
date: 2017-01-10
------------------------------------
The default Vuelog configurations may or may not meet your needs. You can modify `config` properties in `userdata/database.js`.

### Overall

```js
// The name of your site, will be displayed in browser tab and site header.
brand: {'en-US': 'Vuelog Site', 'zh-CN': 'Vuelog 站点'},

// The image displayed in site header right beside the brand.
logo: './static/vuelog.svg',

// The full URL where your site is hosted.
home: 'http://yoursite.com',

// Path to the domain root that serves your site, starts and ends with slash (`/`).
// Set to `'/'` if your site is under domain root.
base: '/',
```

The `brand` field supports multiple languages, please read [multiple languages support](#/blog/docs/2017/multiple-languages-support) for more information.

Your `logo` image can be any size, either raster or vector. Vuelog will automatically resize it to fit the page layout.

Tell Vuelog where your site is hosted with `home` and `base` fields. Please note that if your site is hosted under a sub-directory of the domain, you must modify the `base` field. For example, if `home` is set to `http://example.com/site`, then `base` should be `/site/`, with both starting and trailing slashes.

### Homepage

```js
// The path to route to when you visit `/`.
// Set to `/home`, `/blog` or a valid path at your need.
defaultPath: '/home',

// Whether footer is visible on `defaultPath` or not.
defaultFooter: false,
```

In the dist package, homepage is set to `/home` - a brief introduction of **Vuelog** project.

![Vuelog](./userdata/images/vuelog-homepage.png)

You can change it to the post list view by setting `defaultPath` to `/blog`. Or, you may want to target it to the path of a page you authored as custom homepage, e.g. `/page/homepage`. This way, you have your customized homepage.

You may also want to hide the footer on homepage. If so, set `defaultFooter` to `false`.

### Languages

```js
// Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
defaultLang: 'en-US',

// Allow/disallow visitors to switch interface language.
switchLang: true,
```

Vuelog is ready for multiple languages support, although currently only Simplified Chinese (`zh-CN`) and American English (`en-US`) are available. You can pick one as the default language. You can also decide whether the visitors could switch the language on the fly.

### Posts

```js
// Number of posts listed in a blog/category view.
postsCount: 3,
```

This field determines the count of posts in a list view. For example, if you set it to `7`, then in a list view there are **7** posts at most. More posts will be listed in the next page.

### Comments

```js
// Fill in the shortname to integrate Disqus with your blog.
disqusShortname: '',

// Fill in the account to integrate IntenseDebate with your blog.
intenseDebateAccount: '',

// Fill in the uid to integrate LiveRe with your blog.
livereUid: ''
```

These 3 fields are useful if you want to enable comments on your site. Please read [use social commenting services](#/blog/docs/2017/use-social-commenting-services) for more information.
