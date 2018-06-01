title: Multiple languages support
category: docs
date: 2017-01-24
------------------------------------
<!-- en-US:+ -->

Vuelog is ready for multiple languages support.

### UI languages

The UI currently provides translations for two different locales: Simplified Chinese (`zh-CN`) and American English (`en-US`). As described in <q>languages</q> section of [customize the site](#/blog/docs/2017/customize-the-site), you can modify following `config` properties in your `userdata/database.js`:

```js
// Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
defaultLang: 'en-US',

// Allow/disallow visitors to switch interface language.
switchLang: true,

// Available languages for switching. Must be a subset of supported languages, or leave empty.
selectedLangs: [],
```

<blockquote class="tip">
  <p>If you are willing to contribute more translations, feel free to fork [Vuelog on GitHub](https://github.com/myst729/Vuelog) and send pull requests. Thank you very much!</p>
</blockquote>

### Content languages

Some content from `userdata/database.js` will be presented in the UI too, e.g. post titles, category titles, navigation link labels. These also support multiple languages. To do so, construct an object that consists of key-value pairs of languages and corresponding content, set it as the field’s value:

```js
{
  title: {'en-US': 'Multiple languages support', 'zh-CN': '多语言支持'},
  slug: 'multiple-languages-support',
  category: 'docs',
  date: '2017-01-24'
}
```

If single language is provided, just use ordinary string:

```js
{
  title: 'Single language',
  slug: 'single-language',
  category: 'docs',
  date: '2017-01-24'
}
```

### Post languages

Vuelog also provides multiple languages supports for your post content. To write your own multiple languages content, you should wrap each translation in the corresponding **language tags pair**.

<pre><code class="lang-markdown">&lt;!-- en-US:+ --&gt;
Your content in American English ...
&lt;!-- en-US:- --&gt;</code></pre>

A language tags pair consists of a start tag and an end tag. Think of the positive and negative terminal of the battery. <code>&lt;!-\- en-US:+ -\-&gt;</code> is like positive, indicates the start of the translation. And <code>&lt;!-\- en-US:- -\-&gt;</code> is like negative, indicates the end.

Language tags pairs are optional. If you don’t want to provide content in various languages, that’s fine. Just write the content without any language tags pair.

<blockquote class="tip">
  <p>Comments do not support the feature since they are hosted by a third party service.</p>
</blockquote>

### Switch languages

If the visitors are allowed to switch languages, he could make the change in the drop-down menu at bottom right.

<img src="./userdata/images/language-en.png" alt="Language" width="208px" height="58px">

After the change is made, the UI language will refresh on the fly. If the page provides content for that language, it refreshes too.

<blockquote class="tip">
  <p>Switching languages by a visitor will not change the system default language settings. It has no influence to other visitors.</p>
</blockquote>

<!-- en-US:- -->

<!-- zh-CN:+ -->

Vuelog 提供了多语言支持。

### 界面语言

界面语言目前仅支持简体中文（`zh-CN`）和美国英语（`en-US`）的支持。[自定义站点](#/blog/docs/2017/customize-the-site)的<q>语言</q>一节已有介绍，你可以修改 `userdata/database.js` 中的以下几个 `config` 属性：

```js
// Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
defaultLang: 'en-US',

// Allow/disallow visitors to switch interface language.
switchLang: true,

// Available languages for switching. Must be a subset of supported languages, or leave empty.
selectedLangs: [],
```

<blockquote class="tip">
  <p>如果你愿意贡献其他语言的翻译，欢迎 fork [Vuelog 项目](https://github.com/myst729/Vuelog)并发送拉取请求。非常感谢！</p>
</blockquote>

### 内容语言

`userdata/database.js` 中有一些内容会显示在界面上，如文章和目录的标题，导航链接的文字标签，等等。这些内容也支持以多种语言显示。方法是以语言名称和内容的键值对构造一个对象，作为支持多语言的属性的值：

```js
{
  title: {'en-US': 'Multiple languages support', 'zh-CN': '多语言支持'},
  slug: 'multiple-languages-support',
  category: 'docs',
  date: '2017-01-24'
}
```

如果只想提供一种语言的内容，使用普通的字符串即可：

```js
{
  title: '单一语言',
  slug: 'single-language',
  category: 'docs',
  date: '2017-01-24'
}
```

### 文章语言

Vuelog 还提供了对文章内容的多语言支持。要编写多语言的内容，你必须用**语言标签对**包裹对应语言的内容。

<pre><code class="lang-markdown">&lt;!-- zh-CN:+ --&gt;
简体中文内容……
&lt;!-- zh-CN:- --&gt;</code></pre>

语言标签对由开始标签和结束标签组成，如同电池的正负极。<code>&lt;!-\- zh-CN:+ -\-&gt;</code> 就像正极，代表内容的开始，而 <code>&lt;!-\- zh-CN:- -\-&gt;</code> 则像负极，代表内容的结束。

语言标签对并非必须。如果你不想提供多语言内容，完全没问题，直接编写内容即可。

<blockquote class="tip">
  <p>第三方服务托管的评论不支持此功能。</p>
</blockquote>

### 更换语言

如果允许访问者更换语言，他可以通过右下方的下拉菜单中进行更改。

<img src="./userdata/images/language-cn.png" alt="更换语言" width="208px" height="58px">

确认更改后，界面语言会立刻刷新。如果当前页面提供了对应语言的内容，也会一同刷新。

<blockquote class="tip">
  <p>访问者更换语言并不会改变系统默认的语言设置，也不会对其他访问者产生影响。</p>
</blockquote>

<!-- zh-CN:- -->

<!-- pt-BR:+ -->

Vuelog está apto para suportar vários idiomas.

### Idiomas para a UI

A UI (_User Interface_) atualmente provê traduções para duas diferentes localidades: Chinês Simplificado (`zh-CN`) e Inglês Norte-Americano (`en-US`). Como descrito na secção de <q>idiomas</q> no [Customizar o Site](#/blog/docs/2017/customize-the-site), você pode alterar as seguintes propriedades de `config` no seu `userdata/database.js`: 

```js
// Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
defaultLang: 'en-US',

// Allow/disallow visitors to switch interface language.
switchLang: true,

// Available languages for switching. Must be a subset of supported languages, or leave empty.
selectedLangs: [],
```

<blockquote class="tip">
  <p>Se você tem vontade de contribuir com mais traduções, sinta-se livre para _forkar_ [Vuelog no GitHub](https://github.com/myst729/Vuelog) e enviar _pull requests_. Muito obrigado!</p>
</blockquote>

### Contéudo dos idiomas

Alguns conteúdos descritos em `userdata/database.js` será apresentado na UI também, como por exemplo o título dos posts, o nome das categorias, as _labels_ para os links de navegação. Todos estes também suportam diversos idiomas. 

```js
{
  title: {'en-US': 'Multiple languages support', 'zh-CN': '多语言支持'},
  slug: 'multiple-languages-support',
  category: 'docs',
  date: '2017-01-24'
}
```

Se apenas um idioma for necessário, apenas utilize uma única string: 

```js
{
  title: 'Single language',
  slug: 'single-language',
  category: 'docs',
  date: '2017-01-24'
}
```

### Idioma dos Posts

Vuelog também provê suporte a múltiplos idiomas para o conteúdo. Para escrever seu conteúdo em vários idiomas, você deverá agrupar cada tradução na sua **tag de pares de idioma** correspondente. 

<pre><code class="lang-markdown">&lt;!-- en-US:+ --&gt;
Your content in American English ...
&lt;!-- en-US:- --&gt;</code></pre>

Uma tag de par de idioma consiste em uma tag de início e uma de finalização. Pense no lado positivo e o negativod e uma bateria. <code>&t;!-\- pt-BR:+ -\-&gt;</code> é como o lado positivo, indica o início da tradução. E <code>&t;!-\- pt-BR:- -\-&gt;</code> é o lado negativo, indicando o fim.

As tags são opcionais. Se você não quer deixar seu conteúdo em vários idiomas, não tem problema. Apenas escreva o contéudo sem quaisquer tags de pares de idioma. 

<blockquote class="tip">
  <p>Comentários não suportam a funcionalidade, pois é hospedada por um serviço de terceiros.</p>
</blockquote>

### Trocando os Idiomas

Se os visitantes são permitidos a trocar os idiomas, ele pode alterá-las em um pequeno menu drop-down no final da página à direita. 

<img src="./userdata/images/language-en.png" alt="Language" width="208px" height="58px">

Depois que a alteração é feita, o idioma da UI será recarregado automaticamente. Se a página provê conteúdo para aquela linguagem, ela também será recarregada. 

<blockquote class="tip">
  <p>O usuário alterar o idioma de visualização para ele, não significa que ele irá alterar a configuração base do sistema. Isso não altera para os demais visitantes.</p>
</blockquote>

<!-- pt-BR:- -->

<!-- es-MX:+ -->

Vuelog actualmente soporta multiples idiomas.

### Idiomas del UI.

La interfaz gráfica ofrece actualmente traducción para cuatro idiomas. Chino simplificado (`zh-CN`), Inglés americano (`en-US`), Portugués Brasil (`pt-BR`) y Español México ('es-MX').

Tal como se describe en la sección <q>Idiomas</q> de [Personaliza tu sitio](#/blog/docs/2017/customize-the-site), puedes modificar la configuración en la propiedad  `config` del archivo `userData/database.js`:

```js
// Idioma de la interface Vuelog.
defaultLang: 'en-US',

// Permitir/Denegar al usurio a cambiar el idioma del sitio.
switchLang: true,

// Idiomas disponibles para cambiar. Deben ser idiomas soportados o bien, dejar vacio.
selectedLangs: [],
```

<blockquote class="tip">
  <p>Si estas dispuesto a contribuir con mas traducciones, sientete libre de hacer *fork* en [Vuelog on GitHub](https://github.com/myst729/Vuelog), y enviar *pull requests*. Muchas gracias!</p>
</blockquote>

### Idioma del contenido

Algún contenido de `userdata/database.js` puede estar presente en la interfaz de usuario, por ejemplo, títulos de posts, nombres de categorías, etiquetas del menú de navegación etc. Estas tambien soportan multiples idiomas. Para hacer esto, contruye un objeto que consita de un item `key-value` con el lenguaje correspondiente y su contenido correspondiente. por ejemplo:

```js
{
  title: {'en-US': 'Multiple languages support', 'zh-CN': '多语言支持', 'es-MX': 'Soporte muilti idioma'},
  slug: 'multiple-languages-support',
  category: 'docs',
  date: '2017-01-24'
}
```

Si úicamente se desea utilizar un idioma, utiliza un *string* ordinario.

```js
{
  title: 'Single language',
  slug: 'single-language',
  category: 'docs',
  date: '2017-01-24'
}
```

### Idioma de Post

Vuelog tambien tiene soporta para multiples idiomas en los posts. Para empezar a escribir el contenido de tus post en diferentes idiomas puedes utilizar las etiquetas de idioma.

```markdown
  <!-- en-Us:+ -->
  Your content in American English ...
  <!-- en:US:- -->
```
Una etiqueta de lenguaje consiste en un par de etiquetas (inicial y final).
Dentro de las etiquetas observa que el simbolo despues de la abreviación del idioma indica cuando la traducción inicia (`:+`) y cuando termina (`:-`).

Estas etiquetas son opcionales, si no deseas escribir contenido en multiples idiomas ,simplemente redacta tu contenido sin etiqueta alguna.


<blockquote class="tip">
  <p>Los comentarios no soportan esta opcion debido a que son un servicio de terceros.</p>
</blockquote>

### Cambiar entre idiomas

Si los visitantes  tienen permitido cambiar el idioma, lo pueden hacer con una lista que se encuentra en la parte inferior derecha.

<img src="./userdata/images/language-en.png" alt="Language" width="208px" height="58px">

Despues de elegir otro idioma, la interfaz se recargará automaticamente. Si la página contiene traducciones para este idoma se refrescará de igual forma.

<blockquote class="tip">
  <p>Cuando un visitante cambia el idioma del sitio, esto no afecta al idioma por default, es decir no afetará a otros visitantes.</p>
</blockquote>

<!-- es-MX:- -->