title: Using Disqus comment service
date: 2016-04-10
---
As a backend－free application, Vuelog itself does not provide commenting functionality. There are many social commenting service out there. Vuelog adopts [Disqus](https://disqus.com/).

To use Disqus, you just fill in your website shortname in `database.js` (see <q>[The (so-called) database](#/blog/guide/2016/the-so-called-database)</q> for more information).

If you want to disable comments for a particular page or post, set `commentless` for that page/post (more on <q>[How to add a post or page?](#/blog/guide/2016/how-to-add-a-post-or-page)</q>).

 In case you don’t like Disqus, feel free to hack Vuelog to integrate your favorite service.