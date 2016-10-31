title: How to add a post or page?
date: 2016-10-21
---
### How to create categories?

Posts are filed under categories. But **category** is a virtual concept indeed.

To create a category is simple, just add a new entry to `categories` section in your `database.js`.

```js
categories: [
  {
    title: 'Category Name', // displayed in the web page
    slug: 'category-slug'   // used in the URL
  },
  ...
]
```

<!-- more -->

### How to add a post?

- Create yearly sub folders in the `/posts` directory, name them in **YYYY** format.

```bash
userdata/
└── posts/
    ├── 2015/
    └── 2016/
```

- Create a new markdown file (extension must be **md**) in the sub folder.

```bash
userdata/
└── posts/
    ├── 2015/
    └── 2016/
        └── how-to-add-a-post-or-page.md
```

- Add a new entry in `posts` section.
   - The `title` field will be rendered in the web pages.
   - Set the markdown file name (without extension) as `slug` field.
   - Set the `category` field to the slug value of category that this post is categorized.
   - The `date` field must be an [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) date format (YYYY-MM-DD).

```js
posts: [
  {
    title: 'How to add a post or page?',
    slug: 'how-to-add-a-post-or-page',
    category: 'guide',
    date: '2016-10-21'
  },
  ...
]
```

### How to write a post?

First of all, I assume you know what [Markdown](https://en.wikipedia.org/wiki/Markdown) is, and how to write something with it. So we are not going to talk about markdown fundamentals.

A post’s source markdown file looks like this:

```md
# title: How to add a post or page?
date: 2016-04-16
category: guide
---
Start your content here...
```

- Technically, **all** metadata fields are optional! So you can leave it blank and it’s all good. 
- But be warned, at least keep the metadata delimiter (default value: `---`) there. Or maybe you’ll run into a parse error.
- There’s one trick. If you want to hide the title in page/post view, start the title line with `#`, like in above sample.
- For better maintain your writings, I recommend you leave some metadata.
- If your post is very long and you just want to show an excerpt in the category view, add an excerpt delimiter (default value: `<!-- more -->`) in the content. Anything after the excerpt delimiter is only available in the post view.

### How to write a page?

Adding a page is very similar to posts.

- Just put the markdown file in `/userdata/pages` folder.

```bash
userdata/
└── pages/
    └── all-about-vuelog.md
```

- Add a new entry in `pages` section. Set the file name (without extension) as the `slug` field.

```js
pages: [
  {
    title: 'All about Vuelog',
    slug: 'all-about-vuelog'
  },
  ...
]
```
