title: File structure of Vuelog
category: docs
date: 2016-10-20
------------------------------------
<!-- en-US:+ -->

Here’s the typical directory structure of a Vuelog deployment:

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

Let’s go through them one by one:

- `index.html`: The entry point of the site. Usually you don’t need to touch it.
- `static/`: This directory contains compiled Vuelog core files, such as JavaScript and CSS. **You should never touch this directory, or your site may down.**
- `userdata/`: Where you put the source markdown files of posts and pages. **Do not change the directory’s name.**
   - `database.js`: The most important file you need to take care of. All your configurations and pages/posts data are stored here.
   - `pages/`: Source markdown files of pages are stored here.
   - `posts/`: Source markdown files of posts are stored here, filed under sub-directories by year.
      - `2016/`: The directory name indicates all posts in it are published in year 2016.

You could put other static files in `userdata/`, e.g. the images referencd in your pages/posts.

For process to publish pages/posts, read [add posts or pages](#/blog/docs/2017/add-posts-or-pages) and [author posts or pages](#/blog/docs/2017/author-posts-or-pages).

<!-- en-US:- -->

<!-- zh-CN:+ -->

这是 Vuelog 部署后典型的目录结构：

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

它们分别是：

- `index.html`: 站点的入口文件，通常不用修改。
- `static/`: 这个目录下是 JavaScript 和 CSS 等编译后的 Vuelog 核心文件。**千万不要动这里的文件，否则可能会导致站点宕机。**
- `userdata/`: 文章和页面的 markdown 源文件都放在这个目录下。**不要修改这个目录的名字。**
   - `database.js`: 整个站点最重要的文件，所有的配置和文章/页面数据都保存在里面。
   - `pages/`: 存放页面 markdown 源文件的目录。
   - `posts/`: 存放文章 markdown 源文件的目录，分别存放于以年份命名的子目录中。
      - `2016/`: 这个目录名表示该目录中存放的所有文章都发布于 2016 年。

你可以把其他静态文件放在 `userdata/` 里，比如文章和页面中引用的图像。

关于发布文章和页面的流程，请阅读[新建文章或页面](#/blog/docs/2017/add-posts-or-pages)和[编写文章或页面](#/blog/docs/2017/author-posts-or-pages)。

<!-- zh-CN:- -->

<!-- pt-BR:+ -->
Aqui está a estrutura típica do diretório de um site desenvolvido com Vuelog: 

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

Iremos passar por eles, um por um:

- `index.html`: O ponto de entrada do site. Normalmente você não precisa mexer em nada aqui.
- `static/`: Este diretório contém os arquivos principais, já compilados, do Vuelog, assim como os arquivos JavaScript e CSS. **Você não deve nunca tocar neste diretório, ou seu site pode ir ladeira a baixo**
- `userdata/`: Onde você põe seus arquivos Markdown dos posts e páginas. **NUNCA mude o nome do diretório.**
   -`database.js`: O arquivo mais importante com o qual você terá de lidar. Todas as suas configurações e dados dos seus posts e páginas estão armazenados aqui.
   -`pages/`: A fonte dos arquivos markdown das suas páginas estão armazenados aqui.
   -`posts/`: A fonte dos arquivos markdown de seus posts estão armazenados aqui, listados por sub-diretórios nomeados pelo ano.
     -`2016/`: O nome do diretório indica o ano em que os posts, aqui introduzidos, foram publicados.

Você pode colocar outros arquvios estáticos no `userdata/` como por exemplo as imagens referenciadas nas suas páginas e posts.

Para entender sobre o processo de publicação de páginas e posts leia [Adicionar posts ou páginas](#/blog/docs/2017/add-posts-or-pages) e [Posts ou páginas por Autor](#/blog/docs/2017/author-posts-or-pages).

<!-- pt-BR:- -->

<!-- es-MX:+ -->
Aquí tenemos la estructura básica de directorios en Vuelog una vez compilado:

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

Repasemos uno a uno:

- `index.html`: Es el punto de inicio de nuestro sitio. Normalmente no esnecesario modificar nada aquí.
- `static/`: Este directorio contiene los archivos *core* compilados de Vuelog. **No deberías tocar ninguno de estos archivos, tu sitio podría dejar de funcionar**
- `userdata/`: Es el directorio donde colocarás los archivos de tus posts y páginas en formato markdown. **No cambies el nombre de este directorio**
   - `database.js`: El archivo más importante con el cual debes ser cuidadoso. Todas las configuraciones de páginas y posts se encuentra aquí.
   - `pages/`: Los archivos markdown de las'páginas del sitio se encuentran aquí.
   - `posts/`: Los archivos markdown de los posts se encuentran aquí, alojadas en subdirectorios por año.
      - `2016/`: El nombre del directorio indica que loas posts que almacena fueron publicados en el año 2016.

Puedes agregar otros archivos estáticos en 'userdata/', por ejemplo las imágenes referenciadas en tus pages/posts. 

Para ver el procedimiento para publicar páginas/posts puedes leér [Añadir páginas y posts](#/blog/docs/2017/add-posts-or-pages) y [Publicaciones de autor y páginas](#/blog/docs/2017/author-posts-or-pages).

<!-- es-MX:- -->