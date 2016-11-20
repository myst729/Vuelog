title: Using social commenting services
date: 2016-04-10
---
As a backend－free application, Vuelog itself does not provide commenting functionality. There are many social commenting service out there. Vuelog adopts [Disqus](https://disqus.com/), [IntenseDebate](https://intensedebate.com/) and [LiveRe](https://livere.com/).

To use it, just fill in your Disqus shortname, IntenseDebate account or LiveRe UID in `database.js`, then the commenting service will be enabled for all posts and pages (see <q>[The (so-called) database](#/blog/guide/2016/the-so-called-database)</q> for more information). If multiple fields are provided, only one of them will be applied. The priority is **Disqus** > **LiveRe** > **IntenseDebate** (don’t ask me why...). Or leave all fields blank if you don’t want comments at all.

If you want to disable comments for a particular page or post, set `commentless` to `true` for that page/post (more on <q>[How to add a post or page?](#/blog/guide/2016/how-to-add-a-post-or-page)</q>).

 In case you don’t like LiveRe or Disqus, feel free to hack Vuelog to integrate your favorite service.