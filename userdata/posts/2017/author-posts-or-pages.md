title: Author posts or pages
category: docs
date: 2017-01-13
------------------------------------
<!-- en-US:+ -->

### Prerequisite

First of all, I assume you know what [markdown](https://en.wikipedia.org/wiki/Markdown) is, and how to write something with it. So we are not going to talk about markdown fundamentals.

### Post template

A post’s source markdown file looks like this:

```md
title: Author posts or pages
category: docs
date: 2017-01-13
------------------------------------
Start your post content here...
```

In the example you could see a line of hyphens, this is the delimiter of metadata and post content. The delimiter consists of at least **3** contiguous hyphens in an exclusive line. One important thing you need to know is that the delimiter is **mandatory**. If it’s missing, the post may not be correctly rendered.

Technically, none metadata field is required. So you can leave it blank and it’s all good. But to better maintain your writings, I recommend you take some notes here.

Vuelog has a set of built-in styles, read [Style examples](#/blog/showcase/2016/style-examples) and see what you can do.

### Functional tags

There are two special tags in Vuelog for structuring post content.

If your post is very long and you just want to show an excerpt in the post list view, you could insert the **excerpt tag** (`<!-- more -->`) at a proper position in the content. Anything after the excerpt tag is only available in the post view. If you insert multiple excerpt tags, only the first one is taken into account.

In the post view, a long post is presented as a super long web page. This doesn’t feel well too. You may want to split the post content into multiple parts. You could do so by inserting **pagination tags** (`<!-- next -->`) in the content. Each pagination tag generates a page break.

Please note that in the list view, the first pagination tag is also treated like the excerpt tag. That said, in the list view, a post with multiple parts will only show the first part.

To author content in multiple languages, you need help from **language tags**. Please read **post languages** section in [multiple languages support](#/blog/docs/2017/multiple-languages-support).

### Page template

A page’s source markdown file is similar to a post’s. The only difference is a page doesn’t have the concept of **category** and **date**. Pagination tags and language tags can be applied to pages too.

<!-- en-US:- -->

<!-- zh-CN:+ -->

### 准备工作

假设你已经知道什么是 [markdown](https://en.wikipedia.org/wiki/Markdown)，以及如何用 markdown 进行写作。因此这里不再介绍 markdown 的基础知识。

### 文章模版

一篇文章的 markdown 源文件大致如下：

```md
title: Author posts or pages
category: docs
date: 2017-01-13
------------------------------------
Start your post content here...
```

上面的示例中有一行连字符，这是元数据和文章内容的分隔符，它由至少 **3** 个连续的连字符独占一行组成。记住，这个分隔符是**必需的**。缺少它，文章内容可能无法正常显示。

技术上来说，元数据并不是必需的，全部留空也没有关系。但为了更好地维护你的文章，建议还是在此做一些记录。

要了解 Vuelog 提供的文章内容样式，可以阅读[样式示例](#/blog/showcase/2016/style-examples)。

### 功能标签

Vuelog 提供了两个用于组织文章内容结构的特殊标签。

如果一篇文章非常长，在文章列表视图只希望显示它的摘要，你可以在文章内容合适的位置插入**摘要标签**（`<!-- more -->`）。摘要标签之后的任何内容都只能在文章视图查看。如果插入了多个摘要标签，只有第一个会起作用。

一篇很长的文章在文章视图中也会呈现为一个超长的网页，这样的浏览体验并不好。把文章内容分成多个部分可能是比较好的选择。这可以通过在文章内容中插入**分页标签**（`<!-- next -->`）实现。每一个分页标签都会产生一个新的分页。

在文章列表视图中，第一个分页标签也会被当作摘要标签进行处理。也就是说，一篇有多个分页的文章在列表视图中也只会显示第一页内容。

编写多语言的内容需要使用**语言标签**，请阅读[多语言支持](#/blog/docs/2017/multiple-languages-support)的**文章语言**一节。

### 页面模版

页面的 markdown 源文件模版与文章类似，只是页面没有目录和发布时间的概念。页面内容也可以使用分页标签和语言标签。

<!-- zh-CN:- -->

<!-- pt-BR:+ -->

### Pré-requisitos

Primeiramente, assumiremos que você sabe o que é [Markdown](https://en.wikipedia.org/wiki/Markdown), e como escrever algo com ele. Então não falaremos sobre os fundamentos do markdown. 

### Template para posts

A base para uma arquivo markdown para posts se assemelha a isto: 

```md
title: Author posts or pages
category: docs
date: 2017-01-13
------------------------------------
Start your post content here...
```

No exemplo, podemos ver uma linha cheia de traços (ou hífens, como preferir). Isso é um delimitador entre a metadata e o conteúdo do post. O delimitador consiste de **no mínimo 3** traços consecutivos em uma linha exclusiva. Outra coisa importante que você precisa saber é que o delimitador é, definitivamente, **obrigatório**. Se você se esquecer dele, o post não será corretamente renderizado. 

Tecnicamente, nenhum campo da metadata é necessário. Então você pode deixá-lo em brnaco e estará tudo bem. Mas para melhor manter seus escritos, nós recomendamos que você anote as metadatas!

Vuelog tem um _set_ de estilos _built-in_, leia [Exemplos de Estilos](#/blog/showcase/2016/style-examples) e veja o que podemos fazer.

### Tags Funcionais

Existem duas tags especiais no Vuelog para estruturar o conteúdo do post. 

Se o seu post é muito long e você quer mostrar uma parte dele na lista de visualização de posts, você pode inserir a **tag de trecho** (`<!-- more -->`) em uma determinada "altura" do conteúdo. Qualquer coisa depois desta tag será apenas visualizada se o visitante clicar no post para lê-lo completamente. Se você adicionar várias tags de trecho, apenas a primeira que será levada em conta. 

Na visualização do post por completo, um post muito longo, apresentado como uma _página web super longa_. Isto não parece ser muito certo também. talvez você queira dividir o conteúdo em várias partes. Para isso o Vuelog permite a inserção de uma **tag de paginação** (`<!-- next -->`) no conteúdo. Cada tag de paginação gera uma quebra de página, diferente da tag de trecho onde apenas uma é levada em conta. 

Note que na visualização de lista de posts, a primeira tag de páginação é tratada como uma tag de trecho. Dito isso, na visualização de lista, um post com várias paginações dentro dele, somente será apresentado o conteúdo da primeira parte/página. 

Para o conteúdo do autor em vários idiomas, você precisará de ajuda das **tags de idioma**. Por favor leia a secçao **Posts por idioma** em [Suporte a vários Idiomas](#/blog/docs/2017/multiple-languages-support).

### Template de páginas

A base para a metadata das páginas é similar ao de posts. A única diferença é que a página não tem o conceito de **categoria** e **data**. Tags de paginação e de idioma podem ser aplicadas a páginas também. 

<!-- pt-BR:- -->


<!-- es-MX:+ -->

### Prerequisitos

Primero que nada, asumo que tienes conocimientos sobre [markdown](https://es.wikipedia.org/wiki/Markdown) y sobre como escribir algo con él. Así que, no hablaremos sobre los fundamentos de markdown.

### Plantilla de un Post
El archivo markdown de un posts luce como el siguiente:

```md
title: Author posts or pages
category: docs
date: 2017-01-13
------------------------------------
Start your post content here...
```

En el ejemplo puedes observar una line de guines, que actúa como delimitador de la `metadata`(información sobre las propiedades del archivo). Este delimitador consiste de almenos **3** guiones continuos en una misma linea. Es importante que sepas que el delimitador es **obligatorio**, ya que sin este, el posts no se mostrará correctamente.

Técnicamente, no es necesario agregar los metadatos, sin embargo son de gran ayuda a la hora de mantener tus escritos, yo recomiendo utilizarlos tambien para agregar algunas notas ahí.

Vuelog tiene una serie de estilos predefinidos, para ver qué puedes hacer con ellos revisa [Ejemplos de estilos](#/blog/showcase/2016/style-examples)


### Etiquetas funcionales

Extisten dos etiquetas especiales en Vuelog para estructurar el contenido de tus posts.

Si tu post es demasiado largo, y deseas solamente mostrar un estracto en la lista de publicaciones, puedes insertar la etiqueta de **extracto**(`<!-- more -->`) en la posición adecuada en tu contenido. Todo lo que se encuentre despues de la etiqueta de  *extracto* se mostrará únicamente en la vista del post. Si agregas más de una etiqueta, solamente se tomará en cuenta la primera.

En la vista de post, un contenido demasiado largo se mostrará como una pagina web super larga. Esto puede no ser del todo agradable al usuario. Puedes hacer una división en tu contenido, para separarlo en múltiples partes. Esto se consigue insertando **etiquetas de paginación**(`<!-- next -->`) en tu contenido. Cada una de las etiquetas creará un salto de página(una nueva paginación).
 
Por favor ten en cuenta que en la vista de lista de posts, la primer etiqueta de paginado es tambien interpretada como una etiqueta de *extracto*. Esto quiere decir que en la vista de lista, un post con múltiples partes solamente mostrará la primera parte.

Para escribir contenido en multiples idiomas, es necesario utilizar las etiquetas de *idioma*. Por favor revisa [soporte multi idioma](#/blog/docs/2017/multiple-languages-support).

### Plantilla de página

Un archivo de página es similar aun archivo de post. La única diferencia es que una página no contiene el concepto de **categoría** y **fecha**. Las etiquetas de *paginado* e *idioma* pueden ser utilizadas tambien.

<!-- es-MX:- -->
