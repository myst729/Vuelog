title: The structure of Vuelog
date: 2016-10-20
---
Here's the typical directory structure of a Vuelog deployment:

```bash
/
├── index.html
├── static/
│   ├── css/
│   └── js/
└── userdata/
    ├── database.js
    ├── pages/
    │   ├── all-about-vuelog.md
    │   └── changelog.md
    └── posts/
        └── 2016/
            ├── how-to-add-a-post-or-page.md
            ├── the-so-called-database.md
            ├── the-structure-of-vuelog.md
            └── the-styles.md
```

<!-- more -->

Let's go through them one by one:

- `index.html`: The entry point of the site. Usually you don't need to touch it.
- `static/`: Compiled Vuelog core files such as JavaScript and CSS. **You should never touch this directory, or your site may down.**
- `userdata/`: Where you put the source markdown files of posts and pages. **Do not change the folder's name.**
   - `database.js`: The most important file you need to take care of. All your configurations and pages/posts data are store here. More details on [the (so-called) database](https://myst729.github.io/Vuelog/#/category/guide/2016/the-so-called-database).
   - `pages/`: Source markdown files of pages are stored here.
   - `posts/`: Source markdown files of posts are stored here, filed under sub-directories by year.
      - `2016/`: The folder name indicates all posts in it are published in year 2016.

You could put other static files in `userdata/`, e.g. the images referencd in your pages/posts.

For process to publish pages/posts, read [how to add a post or page?](https://myst729.github.io/Vuelog/#/category/guide/2016/how-to-add-a-post-or-page).
