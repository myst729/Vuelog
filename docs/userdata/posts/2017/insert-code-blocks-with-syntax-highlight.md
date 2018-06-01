title: Insert code blocks with syntax highlight
category: docs
date: 2017-01-18
------------------------------------
<!-- en-US:+ -->

You can insert code block in your post or page. Vuelog currently supports syntax highlight for following languages:

- Markdown
- HTML / XML
- CSS / LESS / SCSS / Stylus
- JavaScript / TypeScript
- PHP / Python / Ruby / Rust / Go
- JSON
- SQL
- Bash
- Diff

Here are some examples:

- Input:

  <pre><code class="lang-markdown">```html
  &lt;div id="app"&gt;&lt;/div&gt;
  ```</code></pre>

  Output:

  ```html
  <div id="app"></div>
  ```

- Input:

  <pre><code class="lang-markdown">```js
  var brand = 'Vuelog'
  ```</code></pre>

  Output:

  ```js
  var brand = 'Vuelog'
  ```

- Input:

  <pre><code class="lang-markdown">```css
  body {
    color: #4fc08d
  }
  ```</code></pre>

  Output:

  ```css
  body {
    color: #4fc08d
  }
  ```

It’s just a trimmed version of the original [highlight.js](https://highlightjs.org/). If a language you want to highlight is not in the supported list, you could fork [Vuelog on GitHub](https://github.com/myst729/Vuelog) and edit `src/helpers/highlight.js`.

<!-- en-US:- -->

<!-- zh-CN:+ -->

你可以在文章或页面中插入代码块。Vuelog 目前支持以下语言的语法高亮：

- Markdown
- HTML / XML
- CSS / LESS / SCSS / Stylus
- JavaScript / TypeScript
- PHP / Python / Ruby / Rust / Go
- JSON
- SQL
- Bash
- Diff

来看一些示例：

- 输入：

  <pre><code class="lang-markdown">```html
  &lt;div id="app"&gt;&lt;/div&gt;
  ```</code></pre>

  输出：

  ```html
  <div id="app"></div>
  ```

- 输入：

  <pre><code class="lang-markdown">```js
  var brand = 'Vuelog'
  ```</code></pre>

  输出：

  ```js
  var brand = 'Vuelog'
  ```

- 输入：

  <pre><code class="lang-markdown">```css
  body {
    color: #4fc08d
  }
  ```</code></pre>

  输出：

  ```css
  body {
    color: #4fc08d
  }
  ```

这只是 [highlight.js](https://highlightjs.org/) 的一个精简版。如果你想高亮的语言尚不在支持列表中，可以 fork [Vuelog 项目](https://github.com/myst729/Vuelog)，编辑 `src/helpers/highlight.js`。

<!-- zh-CN:- -->

<!-- pt-BR:+ -->

Você pode inserir blocos de código em seu post ou página. Vuelog atualmente suporta realce de sintaxe para as segunites linguagens: 

- Markdown
- HTML / XML
- CSS / LESS/ SCSS/ Stylus
- JavaScript / TypeScript
- PHP / Python / Ruby / Rust / Go
- JSON
- SQL
- Bash
- Diff

Aqui estão alguns exemplos: 

- Entrada: 

  <pre><code class="lang-markdown">```html
  &lt;div id="app"&gt;&lt;/div&gt;
  ```</code></pre>

  Saída:

  ```html
  <div id="app"></div>
  ```

- Entrada:

  <pre><code class="lang-markdown">```js
  var brand = 'Vuelog'
  ```</code></pre>

  Saída:

  ```js
  var brand = 'Vuelog'
  ```

- Entrada:

  <pre><code class="lang-markdown">```css
  body {
    color: #4fc08d
  }
  ```</code></pre>

  Saída:

  ```css
  body {
    color: #4fc08d
  }
  ```

Isto é apenas uma versão cortada da original [highlight.js](https://highlightjs.org/). Se a linguagem que você quer realçar não está descrita na lista das linguagens suportadas, você pode _forkar_ o [Vuelog no Github](https://github.com/myst729/Vuelog) e editar `src/helpers/hihglight.js`.

<!-- pt-BR:- -->



<!-- es-MX:+ -->

Puedes insertar un bloque de código en tu post o página. Vuelog actualmente soporta remarcado de sintaxis para los siguentes lenguajes de programación:


- Markdown
- HTML / XML
- CSS / LESS / SCSS / Stylus
- JavaScript / TypeScript
- PHP / Python / Ruby / Rust / Go
- JSON
- SQL
- Bash
- Diff

Aquí tienes algunos ejemplos:

- Input:

  <pre><code class="lang-markdown">```html
  &lt;div id="app"&gt;&lt;/div&gt;
  ```</code></pre>

  Output:

  ```html
  <div id="app"></div>
  ```

- Input:

  <pre><code class="lang-markdown">```js
  var brand = 'Vuelog'
  ```</code></pre>

  Output:

  ```js
  var brand = 'Vuelog'
  ```

- Input:

  <pre><code class="lang-markdown">```css
  body {
    color: #4fc08d
  }
  ```</code></pre>

  Output:

  ```css
  body {
    color: #4fc08d
  }
  ```
Esto es solamente una versión simplificada del original [highlight.js](https://highlightjs.org/). Si uno de los lenguajesd que deseas utilizar no está soportado, puedes hacer un *fork* a [Vuelog on GitHub](https://github.com/myst729/Vuelog) y editar el archivo `src/helpers/highlight.js`.

<!-- es-MX:- -->