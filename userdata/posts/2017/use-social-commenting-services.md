title: Use social commenting services
category: docs
date: 2017-01-19
------------------------------------
As a backend－free application, Vuelog itself does not provide commenting functionality. There are many social commenting service out there. Vuelog adopts [Disqus](https://disqus.com/), [IntenseDebate](https://intensedebate.com/) and [LiveRe](https://livere.com/).

It’s configured in `config` section in `userdata/database.js`.

```js
// Fill in the shortname to integrate Disqus with your blog.
disqusShortname: '',

// Fill in the account to integrate IntenseDebate with your blog.
intenseDebateAccount: '',

// Fill in the uid to integrate LiveRe with your blog.
livereUid: ''
```

To use it, just fill in your Disqus shortname, IntenseDebate account or LiveRe UID, then the commenting service will be enabled for all posts and pages. If multiple fields are provided, only one of them will be applied. The priority is **Disqus** > **LiveRe** > **IntenseDebate** (don’t ask me why...). Or leave all fields blank if you don’t want comments at all.

If you want to disable comments for a particular page or post, set `commentless` to `true` for that page/post (more on [add posts or pages](#/blog/docs/2017/add-posts-or-pages)).

```js
{
  title: 'Use social commenting services',
  slug: 'use-social-commenting-services',
  category: 'docs',
  date: '2017-01-19',
  commentless: true // This turns off the comments for this post.
}
```

If you are using another service, feel free to fork Vuelog and integrate your favorite one.
