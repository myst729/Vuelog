title: Add posts or pages
category: docs
date: 2017-01-12
------------------------------------
<!-- en-US:+ -->

### Add pages

To add pages, just create markdown files (extension must be **md**) in `/userdata/pages` directory.

```bash
userdata/
└── pages/
    └── all-about-vuelog.md
```

Then add a new entry in `pages` section in `userdata/database.js`.

```js
pages: [
  {
    title: {'en-US': 'About Vuelog', 'zh-CN': '关于 Vuelog'},
    slug: 'about',
    exclude: false,     // (OPTIONAL) `true` to exclude the page from archive view
    titleless: false,   // (OPTIONAL) `true` to hide the title in page view
    commentless: false, // (OPTIONAL) `true` to disable comments for the page
    draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
  }
]
```

There are two mandatory fields:

- `title` is the page’s title. Page title supports multiple languages, please read [multiple languages support](#/blog/docs/2017/multiple-languages-support) for more information.
- `slug` must be set to the markdown file’s name (without extension).

There are four optional fields that accept boolean values:

- Set `exclude` to `true` will exclude the page from archive view (`/archive`).
- Set `titleless` to `true` will hide the title in page view.
- Set `commentless` to `true` will turn off comments for the page, more on [use social commenting services](#/blog/docs/2017/use-social-commenting-services).
- Set `draft` to `true` will make the page inaccessible for visitors.

<blockquote class="tip">
  <p>`exclude` and `titleless` are useful if you set the page as your custom homepage.</p>
</blockquote>

### Add categories

Posts are filed under categories. So, to create posts, you must have categories for them.

To add a category is simple, add a new entry to `categories` section in `userdata/database.js`.

```js
categories: [
  {
    title: {'en-US': 'Docs', 'zh-CN': '文档'},
    slug: 'docs'
  }
]
```

Both `title` and `slug` are mandatory. Category title also supports multiple languages.

### Add posts

Create yearly sub-directories under `/posts` directory, name them like **YYYY**, such as `/2017`. Create markdown files (extension must be **md**) in the yearly sub-directories.

```bash
userdata/
└── posts/
    ├── 2016/
    │   └── how-to-add-posts-or-pages.md
    └── 2017/
```

Then add a new entry in `posts` section in `userdata/database.js`.

```js
posts: [
  {
    title: 'Add posts or pages',
    slug: 'add-posts-or-pages',
    category: 'docs',
    date: '2017-01-12',
    titleless: false,   // (OPTIONAL) `true` to hide the title in page view
    commentless: false, // (OPTIONAL) `true` to disable comments for the page
    draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
  }
]
```

There are four mandatory fields:

- `title` and `slug` are similar as pages.
- `category` is the category’s `slug` value in which the post is filed under.
- `date` is the when the post is created, must be an [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) date format (**YYYY-MM-DD**).

There are three optional fields that accept boolean values:

- `titleless`, `commentless` and `draft` are similar as pages.

<!-- en-US:- -->

<!-- zh-CN:+ -->

### 添加页面

要添加页面，首先在 `/userdata/pages` 目录下创建 markdown 文件（扩展名必须为 **md**）。

```bash
userdata/
└── pages/
    └── all-about-vuelog.md
```

然后在 `userdata/database.js` 的 `pages` 部分新增一个入口。

```js
pages: [
  {
    title: {'en-US': 'About Vuelog', 'zh-CN': '关于 Vuelog'},
    slug: 'about',
    exclude: false,     // (OPTIONAL) `true` to exclude the page from archive view
    titleless: false,   // (OPTIONAL) `true` to hide the title in page view
    commentless: false, // (OPTIONAL) `true` to disable comments for the page
    draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
  }
]
```

有两个属性是必需的：

- `title` 属性是页面的标题。这个属性支持多语言，详情请阅读[多语言支持](#/blog/docs/2017/multiple-languages-support)；
- `slug` 必须设置为对应的 markdown 文件名（不带扩展名）。

有四个接受布尔值的可选属性：

- `exclude` 设为 `true` 的页面不会出现在归档视图（`/archive`）；
- `titleless` 设为 `true` 的页面在页面视图中不会显示标题；
- `commentless` 设为 `true` 的页面会关闭评论功能，更多请阅读[使用社会化评论服务](#/blog/docs/2017/use-social-commenting-services)；
- `draft` 设为 `true` 的页面对所有访问者都不可见。

<blockquote class="tip">
  <p>设置自定义首页时，可以考虑开启 `exclude` 和 `titleless` 属性。</p>
</blockquote>

### 添加目录

文章归类在目录下。因此，要添加文章，必须先添加目录。

添加目录很简单，只需要在 `userdata/database.js` 的 `categories` 部分新增一个入口。

```js
categories: [
  {
    title: {'en-US': 'Docs', 'zh-CN': '文档'},
    slug: 'docs'
  }
]
```

`title` 和 `slug` 属性都是必需的。目录标题也支持多语言。

### 添加文章

在 `/posts` 目录下创建以年份命名，格式为 **YYYY** 的子目录，如 `/2017` 等。在年份目录下创建 markdown 文件（扩展名必须为 **md**）。

```bash
userdata/
└── posts/
    ├── 2016/
    │   └── how-to-add-posts-or-pages.md
    └── 2017/
```

然后在 `userdata/database.js` 的 `posts` 部分新增一个入口。

```js
posts: [
  {
    title: 'Add posts or pages',
    slug: 'add-posts-or-pages',
    category: 'docs',
    date: '2017-01-12',
    titleless: false,   // (OPTIONAL) `true` to hide the title in page view
    commentless: false, // (OPTIONAL) `true` to disable comments for the page
    draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
  }
]
```

有四个属性是必需的：

- `title` 和 `slug` 属性与页面类似；
- `category` 是该文章所属目录的 `slug` 属性值；
- `date` 是文章创建日期，必须为 [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) 日期格式（**YYYY-MM-DD**）。

有三个接受布尔值的可选属性：

- `titleless`、`commentless` 和 `draft` 属性与页面类似。

<!-- zh-CN:- -->

<!-- pt-BR:+ -->

### Adicionar Páginas

Para adicionar páginas, apenas crie arquivos markdown (a extensão deve ser **md**) no diretório `/userdata/pages`.

```bash
userdata/
└── pages/
    └── all-about-vuelog.md
```

Então adicione uma nova entrada na secção `pages` em `userdata/database.js`.

```js
pages: [
  {
    title: {'en-US': 'About Vuelog', 'zh-CN': '关于 Vuelog'},
    slug: 'about',
    exclude: false,     // (OPTIONAL) `true` to exclude the page from archive view
    titleless: false,   // (OPTIONAL) `true` to hide the title in page view
    commentless: false, // (OPTIONAL) `true` to disable comments for the page
    draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
  }
]
```

Existem dois campos obrigatórios: 

- `title` deve conter o título da página. Títulos de página suporta múltiplos idiomas, por favor leia [Suporte a vários idiomas](#/blog/docs/2017/multiple-languages-support) para maiores informações.
- `slug` deve ser atribuido com o nome do arquivo markdown (**sem a extensão**).

Existem quatro campos opcionais que aceitam valores booleanos, ou seja: verdadeiro ou falso. 

- Atribua `true` para `exclude` que irá esconder a página da visualização de arquivo (`/archive`).
- Atribua `true` para `titleless` que irá esconder o título da página. 
- Atribua `true` para `comentless` que Vuelog desligará os comentários na página, mais informações em [Uso de serviços sociais de comentários](#/blog/docs/2017/use-social-commenting-services).
- Atribua `true` para `draft` que fará a página inacessível para os visitantes.

<blockquote class="tip">
  <p>`exclude` e `titleless` Se você setar a página como sua página inicial personalizada.</p>
</blockquote>

### Adicionar Categorias

Posts são divididos sobre categorias. Então, para criar posts, você deve ter criado categorias para eles. 

Para adicionar uma categoria simples, adicione uma nova entrada em `categories` no arquivo `userdata/database.js`.

```js
categories: [
  {
    title: {'en-US': 'Docs', 'zh-CN': '文档'},
    slug: 'docs'
  }
]
```

Ambos, `title` e `slug`, são obrigatórios. Categorias também suportam vários idiomas.

### Add posts

Crie sub-diretórios dentro de `/posts`, nomeie-os com o ano da publicação, com o formato **YYYY**, como exemplo `/2017`. Crie arquivos markdown (extensões devem ser **md**) dentro dos sub-diretórios anuais.

```bash
userdata/
└── posts/
    ├── 2016/
    │   └── how-to-add-posts-or-pages.md
    └── 2017/
```

então, adicione uma nova entrada na secção `posts` em `userdata/database.js`.

```js
posts: [
  {
    title: 'Add posts or pages',
    slug: 'add-posts-or-pages',
    category: 'docs',
    date: '2017-01-12',
    titleless: false,   // (OPTIONAL) `true` to hide the title in page view
    commentless: false, // (OPTIONAL) `true` to disable comments for the page
    draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
  }
]
```

Existem, nesta secção, quatro campos obrigatórios: 

- `title` e `slug` são similares ao de páginas.
- `category` é o mesmo do campo `slug` em categoria. 
- `date` é a data em que o post foi criado, deve ser do formato [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm). Ex.: **YYYY-MM-DD**

Existem três campos opcionais que aceitam valores booleanos: 

- `titleless`, `commentless` e `draft`, que são similares aos campos de mesmo nome na secção de páginas.

<!-- pt-BR:- -->

<!-- es-MX:+ -->

### Agregar páginas

Para agregar páginas, simplemente crea archivos (la extensión debe ser **.md**) en el directorio '/userdata/pages'.

```bash
userdata/
└── pages/
    └── all-about-vuelog.md
```
Después agrega un nuevo item en la sección `pages` dentro de `userdata/database.js`.

```js
pages: [
  {
    title: {'en-US': 'About Vuelog', 'zh-CN': '关于 Vuelog'},
    slug: 'about',
    exclude: false,     // (OPTIONAL) `true` to exclude the page from archive view
    titleless: false,   // (OPTIONAL) `true` to hide the title in page view
    commentless: false, // (OPTIONAL) `true` to disable comments for the page
    draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
  }
]
```
Hay dos campos que son obligatorios:

- `title` es el título de la página. El título soporta multi idioma, por favor revisa [Soporte multi idioma](#/blog/docs/2017/multiple-languages-support) para más información.
- `slug` debe ser el nombre del del archivo markdown sin extensión.

Existen cuantro campos opcionale que aceptan valores booleanos.

- Establecer `exclude` a `true` excluirá la página de la seccion de archivo (`/archive`).
- Establecer `titleless` a  `true` ocultará el título de la página.
- Establecer `commentless` a `true` deshabilitará la sección de comentarios. Ver más en [Uso de servicios de comentarios](#/blog/docs/2017/use-social-commenting-services).
- Establecer `draft` a `true` hará que la página no sea accesible para los visitantes.

<blockquote class="tip">
  <p>`exclude` y `titleless` son de gran ayuda si estableces la página como tu página principal.</p>
</blockquote>

### Agregar categorías
Los posts son clasificados en categorías. Entonces, para crear posts necesitas tener las categorías de estos.

Para agregar una categoría es tan simple como añadir un nuevo item en la sección `categories` en `userdata/database.js`.

```js
categories: [
  {
    title: {'en-US': 'Docs', 'zh-CN': '文档'},
    slug: 'docs'
  }
]
```
Ambos, `title` y `slug` son obligatorios. El título de la categoría tambien soporta multiples idiomas.


### Agregar posts/publicaciones

Crea subdirectorios anuales  dentro de `/posts`, y llamalos con la siguiente nomenclatura **YYYY**, por ejemplo `/2017`. Crea archivos markdown (**.md**) en cada uno de los directorios anuales.


```bash
userdata/
└── posts/
    ├── 2016/
    │   └── how-to-add-posts-or-pages.md
    └── 2017/
```
Posteriormente, agrega un nuevo item en la sección `posts` en `userdata/database.js`.

```js
posts: [
  {
    title: 'Add posts or pages',
    slug: 'add-posts-or-pages',
    category: 'docs',
    date: '2017-01-12',
    titleless: false,   // (OPTIONAL) `true` to hide the title in page view
    commentless: false, // (OPTIONAL) `true` to disable comments for the page
    draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
  }
]
```
Existen cuatro compos obligatorios:

- `title` y `slug` son parecidos a los compos de las páginas.
- `category` es el valor del campo `slug` en la cual el post está clasificado.
- `date`  es cuándo el post fue creado. Debe ser un formato de fecha [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) (**YYYY-MM-DD**).

Existen tres campos opcionales que aceptan valores booleanos:

- `titleless`, `commentless` y `draft` similares a los campos de páginas.

<!-- es-MX:- -->
