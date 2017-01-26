title: Insert code blocks with syntax highlight
category: docs
date: 2017-01-18
------------------------------------
You can insert code block in your post or page. Vuelog supports following languages:

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

If a language you want to highlight is not in the supported list, you could fork the Vuelog project and edit `src/helpers/highlight.js`. It’s just a trimmed version of the original [highlight.js](https://highlightjs.org/).
