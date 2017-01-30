title: About Vuelog
------------------------------------
<!-- en-US:+ -->

### Why did I create Vuelog?

Several years ago, I migrated my blog to [GitHub Pages](https://pages.github.com/). At that time, I have several choices: Jekyll, Hexo, or something I hand-crafted with AngularJS. Finally I chose [Hexo](https://hexo.io/) to generate the static website, because I’m lazy and don’t like Ruby.

Before Hexo I was using [WordPress](https://wordpress.org/). It’s rather simple - log in, write something, publish. With Hexo, everytime I want to write something, I need to generate the whole static site locally after finished writing, and then push the generated copy via git client. In the beginning I thought, well, boring but I can stand it. However, one thing changed my mind - I got a new laptop. You know the dirty works to set up a work station. Hexo only pushed the generated site to GitHub, all the configurations and source markdown files are stored locally. Fortunately, I didn’t format the old laptop before I realized I forgot to backup them.

Then I wondered, can I put the configurations into the repository? Also, can I get rid of building the static copy all the time? A coder’s answer is (always) to build own wheels. This time, I told myself not to be lazy again.

<blockquote class="tip">
  <p>If you could read Chinese, there’s [an issue on GitHub](https://github.com/myst729/Vuelog/issues/6) created by a Hexo team member, which talks about this too.</p>
</blockquote>

### Why did I choose Vue?

Why not AngularJS or React?

AngularJS (1.x) is not an option because I use it quite a lot in my daily job. I want to try something I haven’t used before.

[Vue](http://vuejs.org/) has a well crafted core library. Its APIs are inspired from AngularJS, very attractive to coders familiar with AngularJS, like me. It’s also light-weighted with good performance.

Besides the incredibly sufficient documentation, Vue has a complete line-up for developement, including scaffolding tool ([vue-cli](https://github.com/vuejs/vue-cli)), client-side routing ([vue-router](https://github.com/vuejs/vue-router)), centralized state management ([vuex](https://github.com/vuejs/vuex)), Chrome DevTools add-on ([vue-devtools](https://github.com/vuejs/vue-devtools)), and other useful tools.

I’ve also written some React “toys” before but never got a chance for real deal. It just doesn’t attract me much. React has its own ecosystem. Maybe I’ll try it in my next project.

### Who can use Vuelog?

Anyone, as long as you are willing to write something more than 140 words (characters), and have a place (e.g. GitHub Pages) to host your writings.

### Is the project still alive?

Of course! In the beginning it’s experimental indeed. As I learn more about Vue and other useful add-ons, I decide to continuously improve, not only to consolidate my knowledges of Vue, but also to make myself more happily writing.

The latest version is totally rewritten, built on vue 2.x, vue-router 2.x and vuex 2.x now. And it constantly develops features, fixes bugs, and updates dependencies.

<!-- en-US:- -->

<!-- zh-CN:+ -->

### 为什么开发 Vuelog？

几年前，我把博客迁移到了 [GitHub Pages](https://pages.github.com/)。那时候我有几个选择：Jekyll、Hexo，或者用 AngularJS 自己开发一个。最后选择了用 [Hexo](https://hexo.io/) 生成静态网站，因为我又懒又不喜欢 Ruby。

在那之前我使用的是 [WordPress](https://wordpress.org/)。那可太简单了——登录，写东西，发布。而使用 Hexo，每次写点东西都要重新生成整个静态站点，再通过 git 客户端推送。刚开始我觉得这样很无聊，但也能接受。然而，有一件事改变了我的看法——换电脑。你肯定清楚配置开发工具的那堆破事。Hexo 所有配置和 markdown 源文件都保存在本地，推送到 GitHub 的只有生成的静态站点。幸好，在我发现忘记备份前还没有格式化旧电脑。

然后我就想，能不能把配置也放进仓库？能不能不用反复地构建静态站点？码农的想法显然是自己造轮子。这回我决定不偷懒了。

<blockquote class="tip">
  <p>GitHub 上有一个 Hexo 开发组成员开的 [issue](https://github.com/myst729/Vuelog/issues/6)，里面也提到了这件事。</p>
</blockquote>

### 为什么选择 Vue？

为什么不是 AngularJS 或者 React？

不选择 AngularJS（1.x）是因为我平时工作中已经用得够多了，想尝试点没用过的东西。

[Vue](http://vuejs.org/) 的核心库非常精巧。它的 API 与 AngularJS 很像，这对于像我这种熟悉 AngularJS 的开发者非常有吸引力。它同时也非常轻量，性能优秀。

除了非常完善的文档，Vue 还有一整套面向开发的周边设施，包括脚手架工具（[vue-cli](https://github.com/vuejs/vue-cli)）、客户端路由（[vue-router](https://github.com/vuejs/vue-router)）、全局状态管理（[vuex](https://github.com/vuejs/vuex)）、Chrome DevTools 扩展（[vue-devtools](https://github.com/vuejs/vue-devtools)），以及其他有用的工具。

我也用 React 写过一些小玩具，但没有开发过真正意义上的项目。React 有自己的生态圈，说不定我以后的项目也会选择它，然而目前它并不是很吸引我。

### 谁可以用 Vuelog？

任何人只要愿意写多于 140 字的东西，都可以使用 Vuelog。当然你也需要一个托管站点的地方（GitHub Pages 就可以）。

### 这个项目还活着吗？

当然了！起初这个项目确实是尝试性的。随着对 Vue 及其周边设施更深入地了解，我决定持续地改进它。不仅可以巩固 Vue 相关的知识，也让自己能够更愉快的写作。

新版本是完全重写的，基于 vue 2.x、vue-router 2.x 和 vuex 2.x 构建，并且在持续地开发新功能，修复问题，以及升级依赖。

<!-- zh-CN:- -->
