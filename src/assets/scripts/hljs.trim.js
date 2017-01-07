// This is a trimmed version of highlight.js main file
// See `/node_modules/highlight.js/lib/index.js` for all supported languages
// For more details, visit https://highlightjs.org/

var hljs = require('highlight.js/lib/highlight')

hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'))
hljs.registerLanguage('stylus', require('highlight.js/lib/languages/stylus'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))

module.exports = hljs
