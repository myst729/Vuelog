title: Customize the site
category: docs
date: 2017-01-10
------------------------------------
<!-- en-US:+ -->

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
homePath: '/home',

// Whether footer is visible on `homePath` or not.
homeFooter: false,
```

In the dist package, homepage is set to `/home` - a brief introduction of **Vuelog** project.

![Vuelog](./userdata/images/homepage-en.png)

You can change it to the post list view by setting `homePath` to `/blog`. Or, you may want to target it to the path of a page you authored as custom homepage, e.g. `/page/homepage`. This way, you have your homepage customized.

You may also want to hide the footer on homepage. If so, set `homeFooter` to `false`.

### Languages

```js
// Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
defaultLang: 'en-US',

// Allow/disallow visitors to switch interface language.
switchLang: true,

// Available languages for switching. Must be a subset of supported languages, or leave empty.
selectedLangs: [],
```

Vuelog is ready for multiple languages support, although currently only Simplified Chinese (`zh-CN`) and American English (`en-US`) are available. 

- Language defined with `defaultLang` will be set as the default language.
- With `switchLang`, you can decide whether the visitors could switch language on the fly.
- Set `selectedLangs` as a subset of supported languages to let the visitors to switch. Leave it empty enables all supported languages.

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
livereUid: '',
```

These fields are useful if you want to enable comments on your site. Please read [use social commenting services](#/blog/docs/2017/use-social-commenting-services) for more information.

### Markdown

```js
// Options for marked, see https://github.com/chjj/marked#options-1 for detail
markedOptions: {}
```

Vuelog uses [marked](https://github.com/chjj/marked) to render the mardowns. The default marked rendering settings in Vuelog are somehow opinion based. If you don't like, you could customize with this object. Please read the marked [docs](https://github.com/chjj/marked#options-1) for help.

<!-- en-US:- -->

<!-- zh-CN:+ -->

Vuelog 的默认配置可能并不完全符合你的需求。你可以修改 `userdata/database.js` 的 `config` 属性。

### 全局

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

`brand` 属性支持多语言，详情请阅读[多语言支持](#/blog/docs/2017/multiple-languages-support)。

`logo` 图像可以是任意尺寸的位图或矢量图，Vuelog 会根据页面布局将其自动缩放至合适的尺寸。

`home` 和 `base` 属性记录了 Vuelog 站点托管的信息。请注意，如果你的站点托管在域名的某个子目录下，必须相应地修改 `base` 属性。比如，`home` 设置为 `http://example.com/site`，则 `base` 应该设置为 `/site/`，开始和结束的 `/` 都要有。

### 首页

```js
// The path to route to when you visit `/`.
// Set to `/home`, `/blog` or a valid path at your need.
homePath: '/home',

// Whether footer is visible on `homePath` or not.
homeFooter: false,
```

发布包中的首页设置为 `/home`，这是 **Vuelog** 项目的简介页面。

![Vuelog](./userdata/images/homepage-cn.png)

要将文章列表视图设为首页，可以把 `homePath` 设为 `/blog`。也可以将其设为要用作首页的页面路径，如 `/page/homepage`，这样就实现了自定义首页。

要隐藏首页的页脚，可以将 `homeFooter` 设为 `false`。

### 语言

```js
// Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
defaultLang: 'en-US',

// Allow/disallow visitors to switch interface language.
switchLang: true,

// Available languages for switching. Must be a subset of supported languages, or leave empty.
selectedLangs: [],
```

Vuelog 提供了多语言支持的功能，尽管目前暂时只有简体中文（`zh-CN`）和美国英语（`en-US`）。

- `defaultLang` 属性定义的语言会被设置为默认的语言；
- `switchLang` 属性决定是否允许访问者更换语言；
- `selectedLangs` 属性可以设置可供更换的语言，必须为已支持语言的子集。留空则所有支持的语言都可供更换。

### 文章

```js
// Number of posts listed in a blog/category view.
postsCount: 3,
```

这个属性决定了文章列表视图中显示的文章数。比如，将其设置为 `7`，则文章列表视图最多会显示 **7** 篇文章，更多的文章会在下一页显示。

### 评论

```js
// Fill in the shortname to integrate Disqus with your blog.
disqusShortname: '',

// Fill in the account to integrate IntenseDebate with your blog.
intenseDebateAccount: '',

// Fill in the uid to integrate LiveRe with your blog.
livereUid: ''
```

如果要开启站点的评论功能，就可以用上这几个属性。详情请阅读[使用社会化评论服务](#/blog/docs/2017/use-social-commenting-services)。

### Markdown

```js
// Options for marked, see https://github.com/chjj/marked#options-1 for detail
markedOptions: {}
```

Vuelog 采用 [marked](https://github.com/chjj/marked) 渲染 markdown 文件。默认的 marked 渲染配置主要考虑 Vuelog 作者个人的喜好。如果你不喜欢这些配置，可以通过这个选项来自定义。具体操作请阅读 marked [文档](https://github.com/chjj/marked#options-1)。

<!-- zh-CN:- -->
