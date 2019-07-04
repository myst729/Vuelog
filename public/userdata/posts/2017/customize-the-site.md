title: Customize the site
category: docs
date: 2017-01-10
------------------------------------
<!-- en-US:+ -->

The default Vuelog configurations may or may not meet your needs. You can modify `config` properties in `userdata/database.js`.

### Overall

```js
// The name of your site, will be displayed in browser tab and site header.
brand: {'en-US': 'Vuelog Site', 'zh-CN': 'Vuelog 站点', 'pt-BR': 'Site do Vuelog'},

// Put the site brand behind current page in `document.title`.
brandTrailing: false,

// The image displayed in site header right beside the brand.
logo: './static/vuelog.svg',

// Path to the domain root that serves your site, starts and ends with slash (`/`).
// Set to `'/'` if your site is under domain root.
base: '/',
```

The `brand` field supports multiple languages, please read [multiple languages support](#/blog/docs/2017/multiple-languages-support) for more information.

By default, `document.title` of current page is combined with site brand and page name. If you want to reverse the sequence, set `brandTrailing` to `true`.

Your `logo` image can be any size, either raster or vector. Vuelog will automatically resize it to fit the page layout.

Tell Vuelog where your site is hosted with the `base` fields. Please note that if your site is hosted under a sub-directory of the domain, you must modify the `base` field. For example, if your site is hosted at `http://example.com/site`, then `base` should be `/site/`, with both starting and trailing slashes.

### Homepage

```js
// The path to route to when you visit `/`.
// Set to `/home`, `/blog` or a valid path at your need.
homePath: '/home',

// Whether footer is visible on `homePath` or not.
homeFooter: false,
```

In the dist package, homepage is set to `/home` - a brief introduction of **Vuelog** project.

![Vuelog](./userdata/images/homepage-en.png)

You can change it to the post list view by setting `homePath` to `/blog`. Or, you may want to target it to the path of a page you authored as custom homepage, e.g. `/page/homepage`. This way, you have your homepage customized.

You may also want to hide the footer on homepage. If so, set `homeFooter` to `false`.

### Languages

```js
// Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
defaultLang: 'en-US',

// Allow/disallow visitors to switch interface language.
switchLang: true,

// Available languages for switching. Must be a subset of supported languages, or leave empty.
selectedLangs: [],
```

Vuelog is ready for multiple languages support, although currently only Simplified Chinese (`zh-CN`) and American English (`en-US`) are available. 

- Language defined with `defaultLang` will be set as the default language.
- With `switchLang`, you can decide whether the visitors could switch language on the fly.
- Set `selectedLangs` as a subset of supported languages to let the visitors to switch. Leave it empty enables all supported languages.

### Posts

```js
// Number of posts listed in a blog/category view.
postsCount: 3,
```

This field determines the count of posts in a list view. For example, if you set it to `7`, then in a list view there are **7** posts at most. More posts will be listed in the next page.

### Comments

```js
// Fill in the shortname to integrate Disqus with your blog.
disqusShortname: '',

// Fill in the uid to integrate LiveRe with your blog.
livereUid: '',
```

These fields are useful if you want to enable comments on your site. Please read [use social commenting services](#/blog/docs/2017/use-social-commenting-services) for more information.

### Markdown

```js
// Options for marked, see https://github.com/chjj/marked#options-1 for detail
markedOptions: {}
```

Vuelog uses [marked](https://github.com/chjj/marked) to render the mardowns. The default marked rendering settings in Vuelog are somehow opinion based. If you don't like, you could customize with this object. Please read the marked [docs](https://github.com/chjj/marked#options-1) for help.

<!-- en-US:- -->

<!-- zh-CN:+ -->

Vuelog 的默认配置可能并不完全符合你的需求。你可以修改 `userdata/database.js` 的 `config` 属性。

### 全局

```js
// The name of your site, will be displayed in browser tab and site header.
brand: {'en-US': 'Vuelog Site', 'zh-CN': 'Vuelog 站点', 'pt-BR': 'Site do Vuelog'},

// Put the site brand behind current page in `document.title`.
brandTrailing: false,

// The image displayed in site header right beside the brand.
logo: './static/vuelog.svg',

// Path to the domain root that serves your site, starts and ends with slash (`/`).
// Set to `'/'` if your site is under domain root.
base: '/',
```

`brand` 属性支持多语言，详情请阅读[多语言支持](#/blog/docs/2017/multiple-languages-support)。

`brandTrailing` 默认为 `false`，即当前页面的 `document.title` 是站点名字加上页面名字。如果你想调换两者的顺序，可以把该选项设为 `true`。

`logo` 图像可以是任意尺寸的位图或矢量图，Vuelog 会根据页面布局将其自动缩放至合适的尺寸。

`base` 属性记录了 Vuelog 站点托管的信息。请注意，如果你的站点托管在域名的某个子目录下，必须相应地修改 `base` 属性。比如，你的站点访问地址为 `http://example.com/site`，则 `base` 应该设置为 `/site/`，开始和结束的 `/` 都要有。

### 首页

```js
// The path to route to when you visit `/`.
// Set to `/home`, `/blog` or a valid path at your need.
homePath: '/home',

// Whether footer is visible on `homePath` or not.
homeFooter: false,
```

发布包中的首页设置为 `/home`，这是 **Vuelog** 项目的简介页面。

![Vuelog](./userdata/images/homepage-cn.png)

要将文章列表视图设为首页，可以把 `homePath` 设为 `/blog`。也可以将其设为要用作首页的页面路径，如 `/page/homepage`，这样就实现了自定义首页。

要隐藏首页的页脚，可以将 `homeFooter` 设为 `false`。

### 语言

```js
// Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
defaultLang: 'en-US',

// Allow/disallow visitors to switch interface language.
switchLang: true,

// Available languages for switching. Must be a subset of supported languages, or leave empty.
selectedLangs: [],
```

Vuelog 提供了多语言支持的功能，尽管目前暂时只有简体中文（`zh-CN`）和美国英语（`en-US`）。

- `defaultLang` 属性定义的语言会被设置为默认的语言；
- `switchLang` 属性决定是否允许访问者更换语言；
- `selectedLangs` 属性可以设置可供更换的语言，必须为已支持语言的子集。留空则所有支持的语言都可供更换。

### 文章

```js
// Number of posts listed in a blog/category view.
postsCount: 3,
```

这个属性决定了文章列表视图中显示的文章数。比如，将其设置为 `7`，则文章列表视图最多会显示 **7** 篇文章，更多的文章会在下一页显示。

### 评论

```js
// Fill in the shortname to integrate Disqus with your blog.
disqusShortname: '',

// Fill in the uid to integrate LiveRe with your blog.
livereUid: ''
```

如果要开启站点的评论功能，就可以用上这几个属性。详情请阅读[使用社会化评论服务](#/blog/docs/2017/use-social-commenting-services)。

### Markdown

```js
// Options for marked, see https://github.com/chjj/marked#options-1 for detail
markedOptions: {}
```

Vuelog 采用 [marked](https://github.com/chjj/marked) 渲染 markdown 文件。默认的 marked 渲染配置主要考虑 Vuelog 作者个人的喜好。如果你不喜欢这些配置，可以通过这个选项来自定义。具体操作请阅读 marked [文档](https://github.com/chjj/marked#options-1)。

<!-- zh-CN:- -->

<!-- pt-BR:+ -->

As configurações padrões do Vuelog podem ou podem não atender suas necessidades. Você pode alterar as propriedades do `config` em `userdata/database.js`.

### Configurações Gerais

```js
// O nome do seu site, será apresentado na aba do navegador e no cabeçalho do site.
brand: {'en-US': 'Vuelog Site', 'zh-CN': 'Vuelog 站点', 'pt-BR': 'Site do Vuelog'},

// O nome do site `brand` vem antes do nome da página (`document.title`) na aba do navegador.
brandTrailing: false,

// A imagem em amostra no cabeçalho do site, logo abaixo do brand.
logo: './static/vuelog.svg',

// Caminho para o domínio que serve o seu site, começa e termina com barra (`/`).
// Coloque `'/'` se o seu site está na raiz de seu domínio.
base '/',
```

O campo `brand` suporta vários idiomas, por favor leia [Suporte a vários idiomas](#/blog/docs/2017/multiple-languages-support) para mais informações.

Por padrão, o `document.title` da sua página atual é combinado com o nome do site e nome da página. Se você quer reverter a sequência, vindo o nome do documento, altere o `brandTrailing` para `true`, ou seja, verdadeiro.

Sua imagem `logo` pode ser de qualquer tamanho, ou também pixelada ou vetorizada. Vuelog irá ajustá-la automaticametne para que se encaixe no layout da página. 

Diga para o Vuelog onde seu site está hospedado com o campo `base`. Por favor, note que se seu site está sobre um sub-diretório do domínio, você deve modificar o campo `base`. Por exemplo, se seu site está hosteado em `http://example.com/site`, então seu `base` deve ser `/site/`, com ambas as barras, iniciando e terminando o caminho.

### Página Inicial

```js
// O caminho de Rota para quando você visitar `/`.
// Aplique `/home`, `/blog` ou qualquer caminho válido que você necessite.
homePath: '/home',

// Se o rodapé é visível na sua `homePath` ou não.
homeFooter: false,
```

No site oficial do Vuelog, a página inicial está _setada_ como `/home` - uma breve introdução de como é o projeto **Vuelog**.

![Vuelog](./userdata/images/homepage-en.png)

Você pode alterar para a visualização de posts, alterando o `homePath` para `/blog`. Ou, você pode querer direcionar para o caminho de uma página que você criou como página inicial ou personalizada, por exemplo `/page/homepage`. Desse jeito, você terá sua página inicial customizada.

Você também pode querer esconder o rodapé (_footer_) na sua página inicial. Basta indicarq ue sua `homeFooter` seja `false`, ou seja, falso. 

### Idiomas

```js
// Idioma da Interface do Vuelog. Atualmente somente existe suporte para 'zn-CN' e 'en-US'.
defaultLang: 'en-US',

// Permitir ou não que os visitantes alterem o idioma da interface.
switchLang: true,

// Linguagens disponíveis para troca. Deve conter algumas que já sejam suportadas, ou deixe em branco. 
selectedLangs: [],
```

Vuelog está pronto para suportar vários idiomas, apesar de que atualmente apenas Chinês Simplificado (`zn-CN`) e Inglês Norte-Americano (`en-US`) estão disponíveis.

- Idioma definido com `defaultLang` será setado como idioma padrão.
- Com `switchLang`, vocẽ pode decidir se os visitantes poderão trocar o idioma rapidamente.
- Coloque em `selectedLangs` um sub-agrupamento de idiomas suportados para permitir que os usuários troquem. Deixe vazio se você deseja permitir todas as linguagens suportadas.

### Posts

```js
// Número de posts listados em uma visualização de blog.
postsCount: 3,
```

Este campo determina a contagem de posts numa visualização de lista. Como exemplo, se você setar para `7`, então na lista estarão sete posts no máximo. Os demais posts estarão listados na página seguinte. 

### Comentários

```js
// Preencha com o shortname para integrar o Disqus com o Blog.
disqusShortname: '',

// Preencha com o UID para integrar o LiveRe com o blog.
livereUid: '',
```

Esses campos são úteis se você deseja permitir comentários de usuários no seu site. Por favor, leia [Uso de Serviços Sociais de Comentários](#/blog/docs/2017/use-social-commenting-services) para maiores informações.

### Markdown

```js
// Opções para texto de marcação, veja https://github.com/chjj/marked#options-1 para detalhes
markedOptions: {}
```

Vuelog usa [marked](https://github.com/chjj/marked) para renderizar os markdowns. As configurações padrão para renderizar o marked no Vuelog são, de alguma forma, baseado em sua opinião. Se você não gosta, você pode customizá-lo. Por favor leia a [documentação](https://github.com/chjj/marked#options-1) do Marked para ajuda.

<!-- pt-BR:- -->

<!-- es-MX:+ -->

Puede que las configuraciones por default de Vuelog cumplan o no con tus necesidades. Puedes modificar las propiedades de `config` en el archivo `userdata/database.js`


### En general

```js
// El nombre de tu sitio, será mostrado en la ventana de tu navegador y en el encabezado del sitio.
brand: {'en-US': 'Vuelog Site', 'zh-CN': 'Vuelog 站点', 'pt-BR': 'Site do Vuelog', 'es-MX': 'Mi sitio'},

// Pone la marca del sitio detras de la página actual en `document.title`.
brandTrailing: false,

// La imagen mostrada a la derecha de la marca en el encabezado.
logo: './static/vuelog.svg',

// La ruta a la carpeta raíz que sirve tu sitio, debe empezar y terminar con `/`.
// establece `/` si tu sitio se encuentra en la raíz de tu dominio.
base: '/',
```
El campo `brand` tiene soporte multi idioma, para más información visita [Soporte multi idioma](#/blog/docs/2017/multiple-languages-support).

Por default, el campo `document.title` de la página actual es una combinación de el nombre del sitio y el título de la página. Si quieres invertir esto, establece `brandTrailing` a `true`.

Tu logo puede ser de cualquier tamaño. mapa de bits o vector. Vuelog la redimensionará automaticamente para acoplarse al *layout* de la página.

Indicale a Vuelog dónde se encuentra almacendo tu sitop a través del atributo `base`. Por favor ten en cuenta que si tu sitio se encuentra en una subcarpeta, deberás indicar esto en el campo `base`. Por ejemplo, si tu sitio se enceuntra en `http://example.com/site`, entonces `base` debe ser igual a `/site/`. con diagonales al principio y al final.

### Página principal

```js
// La ruta a seguir cuando visitas `/`.
// Establece `/home`, `/blog` o cualquier ruta válida quenecesites.
homePath: '/home',

// Establece si el pie de página es visible o no.
homeFooter: false,
```
En el empaquetado *dist*, *homepage* es establecido en `/home`. - Una breve introducción del proyecto **VueLog**

![Vuelog](./userdata/images/homepage-en.png)

Puedes cambiar esto a la lista de posts estableciendo `homepage` a `/blog`. O es posible que desees redirigirlo a una página que tu establezcas, por ejemplo `/page/homepage`. De esta forma tienes una página personalizada.

Puede que tambien desees ocultar el pie de página en la página principal. puedes hacer esto con `homeFooter` establecido en `false`.

### Idiomas

```js
// Idioma de la intercade de Vuelog. Actualmente soporta 'zh-Ch', 'en-Us', 'pt-BR' y 'es-Mx'.
defaultLang: 'en-US',

// Permitir/denegar a los usuarios cambiar el idioma.
switchLang: true,

// Idiomas disponibles para cambiar. Deben ser idiomas soportados, o bien dejar vacio.
selectedLangs: [],
```
Vuelog soporta multiples idiomas. Acutalmente solo Chino simplificado ('zh-CN'), Inglés Americano ('en-Us'), Portugues de Brasil ('pt-BR') y Español México ('es-MX').

- Language defined with `defaultLang` will be set as the default language.
- With `switchLang`, you can decide whether the visitors could switch language on the fly.
- Set `selectedLangs` as a subset of supported languages to let the visitors to switch. Leave it empty enables all supported languages.

### Posts

```js
// Número de posts listados en la vista de blog/categoría.
postsCount: 3,
```
Este campo establece el número de posts en la vista de lista. Por ejemplo si estableces este campo en **7**, entonces se mostrarán 7 posts como máximo, los demás serán mostrados en la siguiente página.

### Comentarios

```js
// Llena este campo con el *shortname* que configures en Disqus para integrarlo a tu sitio.
disqusShortname: '',

// Llena este campo con el uid para integrar LiveRe en tu sitio.
livereUid: '',
```

Estos campos son de gran ayuda si desesas habilitar comentarios en tu sitio. Para más información lee [Uso de comentarios sociales](#/blog/docs/2017/use-social-commenting-services).

### Markdown

```js
// opciones para markdown, visita see https://github.com/chjj/marked#options-1 para más detalles.
markedOptions: {}
```
Vuelog utiliza [marked](https://github.com/chjj/marked) para renderizar el contenido markdown. Las opciones por default para el render en Vuelog estan basados en algunas opiniones. Si deseas puedes personalizarlas con esta opción. Para obtener ayuda revisa [documentacion marked](https://github.com/chjj/marked#options-1).

<!-- es-MX:- -->