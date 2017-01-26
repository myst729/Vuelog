title: Author a post or page
category: docs
date: 2017-01-13
------------------------------------
### Prerequisite

First of all, I assume you know what [markdown](https://en.wikipedia.org/wiki/Markdown) is, and how to write something with it. So we are not going to talk about markdown fundamentals.

### Basis

A post’s source markdown file looks like this:

```md
title: Author a post or page
category: docs
date: 2017-01-13
------------------------------------
Start your post content here...
```

In the example you could see a line of hyphens, this is the delimiter of metadata and post content. The delimiter consists of at least 3 contiguous hyphens. One important thing you need to know is that the delimiter is **mandatory**. If it’s missing, the post may not be correctly rendered.

Technically, none metadata field is required. So you can leave it blank and it’s all good. But to better maintain your writings, I recommend you take some notes here.

Vuelog has a set of built-in styles, read [Style examples](#/blog/showcase/2016/style-examples) and see what you can do.

### Functional tags

There are two special tags for structuring post content.

If your post is very long and you just want to show an excerpt in the post list view, you could insert the **excerpt tag** (`<!-- more -->`) at a proper position in the content. Anything after the excerpt tag is only available in the post view. If you insert multiple excerpt tags, only the first one is taken into account.

In the post view, a long post is presented as a super long web page. This doesn’t feel well, you may want to split the post content into multiple parts. You could do so by inserting **pagination tags** (`<!-- next -->`) in the content. Each pagination tag generates a page break.

Please note that in the list view, the first pagination tag is also treated like the excerpt tag. That said, in the list view, a post with multiple parts will only show the first part.
