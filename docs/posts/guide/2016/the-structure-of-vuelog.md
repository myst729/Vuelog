title: The structure of Vuelog
date: 2016-04-14
---
Here's the typical directory structure of a Vuelog deployment:

```bash
.
├── index.html
├── database.js
├── docs
│   ├── pages
│   │   ├── all-about-vuelog.md
│   │   └── changelog.md
│   └── posts
│       └── guide
│           └── 2016
│               ├── customization-for-the-hackers.md
│               ├── how-to-add-a-post-or-page.md
│               ├── the-so-called-database.md
│               ├── the-structure-of-vuelog.md
│               └── the-styles.md
└── static
    ├── app.423e1473003aee591356.js
    ├── css/
    ├── fonts/
    ├── img/
    └── pictures/
```

<!-- more -->

Let's go through them one by one:

- `index.html`: The entry point of your site. Usually you don't need to touch it.
- `database.js`: The most important file you need to take care of. The overall configurations and posts/pages data are store here.
- `docs/`: Where you put the source markdown files of your posts and pages. Its name can be configured in `database.js`.
   - `pages/`: Source markdown files for pages are stored in the root level of this directory.
   - `posts/`: Source markdown files for posts are stored in this directory, filed under a `%{category}/%{year}/` path.
- `static/`: Compiled Vuelog core files including JavaScript, CSS, images and web fonts.
   - `pictures/`: Your personal files can be stored in `static/` as well. For example, `pictures` stores the files being used in the posts.
