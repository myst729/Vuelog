title: How to add a post or page?
date: 2016-04-16
---
### How to create categories?

Posts are filed under categories. Before write a post, you must create a category if it doesn't exist.

To create a category is simple:

- Create a new folder under `/docs/posts`.
- Add a new entry in `categories` section in `database.js`. Set the folder name as the `slug` property's value.

```js
categories: [
  {
    title: 'Guide',
    slug: 'guide'
  },
  ...
```

<!-- more -->

### How to add a post?

- Create a sub folder in the category folder, name it in **route time format** defined in your `database.js`. This can be either year accurate or month accurate, or even day, all up to you.
- Create a new markdown file (extension must be **md**) in the sub folder.
- Add a new entry in `posts` section.
   - Set the file name (without extension) as the `slug` property's value.
   - Set the category folder name as the `category` property's value.
   - The `date` property should be in 8-digit format, representing year, month, and date of the time.

```js
posts: [
  {
    title: 'How to add a post or page?',
    slug: 'how-to-add-a-post-or-page',
    category: 'guide',
    date: 20160416
  },
  ...
```

### How to write a post?

First of all, I assume you know what [Markdown](https://en.wikipedia.org/wiki/Markdown) is, and how to write something with it. So we are not going to talk about markdown fundamentals.

A post's source markdown file looks like this:

```md
title: How to add a post or page?
date: 2016-04-16
---
Start your content here...
```

- The first line is the title of the post.
- The second line is the date, it should follow the **display time format** defined in your `database.js`.
- The Third line is the delimiter (must be `---`) to separate your post's meta information and main content.
- Content start from the fourth line.
- If your post is very long and you just want to show an excerpt in the category view, you can add `<!-- more -->` in your content. Anything after that syntax is only available in the post view.

### How to write a page?

Adding a post is very similar to posts.

- Just put the markdown file in `/docs/pages` folder.
- Add a new entry in `pages` section. Set the file name as the `slug` property's value.
- As a page is usually for long-term content, it doesn't need to set the time, both in database entry and source markdown file.

```js
pages: [
  {
    title: 'All about Vuelog',
    slug: 'all-about-vuelog'
  },
  ...
```

