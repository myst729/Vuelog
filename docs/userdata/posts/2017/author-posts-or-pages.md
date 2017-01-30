title: Author posts or pages
category: docs
date: 2017-01-13
------------------------------------
<!-- en-US:+ -->

### Prerequisite

First of all, I assume you know what [markdown](https://en.wikipedia.org/wiki/Markdown) is, and how to write something with it. So we are not going to talk about markdown fundamentals.

### Post template

A post’s source markdown file looks like this:

```md
title: Author posts or pages
category: docs
date: 2017-01-13
------------------------------------
Start your post content here...
```

In the example you could see a line of hyphens, this is the delimiter of metadata and post content. The delimiter consists of at least **3** contiguous hyphens in an exclusive line. One important thing you need to know is that the delimiter is **mandatory**. If it’s missing, the post may not be correctly rendered.

Technically, none metadata field is required. So you can leave it blank and it’s all good. But to better maintain your writings, I recommend you take some notes here.

Vuelog has a set of built-in styles, read [Style examples](#/blog/showcase/2016/style-examples) and see what you can do.

### Functional tags

There are two special tags in Vuelog for structuring post content.

If your post is very long and you just want to show an excerpt in the post list view, you could insert the **excerpt tag** (`<!-- more -->`) at a proper position in the content. Anything after the excerpt tag is only available in the post view. If you insert multiple excerpt tags, only the first one is taken into account.

In the post view, a long post is presented as a super long web page. This doesn’t feel well too. You may want to split the post content into multiple parts. You could do so by inserting **pagination tags** (`<!-- next -->`) in the content. Each pagination tag generates a page break.

Please note that in the list view, the first pagination tag is also treated like the excerpt tag. That said, in the list view, a post with multiple parts will only show the first part.

To author content in multiple languages, you need help from **language tags**. Please read **post languages** section in [multiple languages support](#/blog/docs/2017/multiple-languages-support).

### Page template

A page’s source markdown file is similar to a post’s. The only difference is a page doesn’t have the concept of **category** and **date**. Pagination tags and language tags can be applied to pages too.

<!-- en-US:- -->

<!-- zh-CN:+ -->

### 准备工作

假设你已经知道什么是 [markdown](https://en.wikipedia.org/wiki/Markdown)，以及如何用 markdown 进行写作。因此这里不再介绍 markdown 的基础知识。

### 文章模版

一篇文章的 markdown 源文件大致如下：

```md
title: Author posts or pages
category: docs
date: 2017-01-13
------------------------------------
Start your post content here...
```

上面的示例中有一行连字符，这是元数据和文章内容的分隔符，它由至少 **3** 个连续的连字符独占一行组成。记住，这个分隔符是**必需的**。缺少它，文章内容可能无法正常显示。

技术上来说，元数据并不是必需的，全部留空也没有关系。但为了更好地维护你的文章，建议还是在此做一些记录。

要了解 Vuelog 提供的文章内容样式，可以阅读[样式示例](#/blog/showcase/2016/style-examples)。

### 功能标签

Vuelog 提供了两个用于组织文章内容结构的特殊标签。

如果一篇文章非常长，在文章列表视图只希望显示它的摘要，你可以在文章内容合适的位置插入**摘要标签**（`<!-- more -->`）。摘要标签之后的任何内容都只能在文章视图查看。如果插入了多个摘要标签，只有第一个会起作用。

一篇很长的文章在文章视图中也会呈现为一个超长的网页，这样的浏览体验并不好。把文章内容分成多个部分可能是比较好的选择。这可以通过在文章内容中插入**分页标签**（`<!-- next -->`）实现。每一个分页标签都会产生一个新的分页。

在文章列表视图中，第一个分页标签也会被当作摘要标签进行处理。也就是说，一篇有多个分页的文章在列表视图中也只会显示第一页内容。

编写多语言的内容需要使用**语言标签**，请阅读[多语言支持](#/blog/docs/2017/multiple-languages-support)的**文章语言**一节。

### 页面模版

页面的 markdown 源文件模版与文章类似，只是页面没有目录和发布时间的概念。页面内容也可以使用分页标签和语言标签。

<!-- zh-CN:- -->
