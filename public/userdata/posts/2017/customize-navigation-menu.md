title: Customize navigation menu
category: docs
date: 2017-01-11
------------------------------------
<!-- en-US:+ -->

You can customize the navigation menu at your need. Let’s take a look at relevant part in `userdata/database.js`:

```js
navigation: [
  {
    label: {'en-US': 'Guide', 'zh-CN': '指南'},
    type: 'category',
    path: '/blog/guide'
  },
  {
    label: {'en-US': 'About', 'zh-CN': '关于'},
    type: 'page',
    path: '/page/all-about-vuelog'
  },
  {
    label: {'en-US': 'Changelog', 'zh-CN': '变更日志'},
    type: 'page',
    path: '/page/changelog'
  },
  {
    label: {'en-US': 'Archive', 'zh-CN': '归档'},
    type: 'archive',
    path: '/archive'
  },
  {
    label: {'en-US': 'Links', 'zh-CN': '链接'},
    type: 'dropdown',
    path: '', // (OPTIONAL) dropdown can be routable too if you set a valid path
    children: [
      { label: 'Weibo', type: 'outgoing', link: 'http://weibo.com/myst729' },
      { label: 'GitHub', type: 'outgoing', link: 'https://github.com/myst729' },
      { label: 'StackOverflow', type: 'outgoing', link: 'https://stackoverflow.com/users/1032492' }
    ]
  }
],
```

- Each item in the list is either a plain link or a dropdown.
- A plain link can redirect to an in-site route or an out-going URL.
- A dropdown is just another list of navigation links. It can be routable too if you set a valid path like other in-site links.
- Navigation link label supports multiple languages, please read [multiple languages support](#/blog/docs/2017/multiple-languages-support) for more information.

<!-- en-US:- -->

<!-- zh-CN:+ -->

你可以根据自己的需求自定义导航菜单。`userdata/database.js` 中相关的配置如下：

```js
navigation: [
  {
    label: {'en-US': 'Guide', 'zh-CN': '指南'},
    type: 'category',
    path: '/blog/guide'
  },
  {
    label: {'en-US': 'About', 'zh-CN': '关于'},
    type: 'page',
    path: '/page/all-about-vuelog'
  },
  {
    label: {'en-US': 'Changelog', 'zh-CN': '变更日志'},
    type: 'page',
    path: '/page/changelog'
  },
  {
    label: {'en-US': 'Archive', 'zh-CN': '归档'},
    type: 'archive',
    path: '/archive'
  },
  {
    label: {'en-US': 'Links', 'zh-CN': '链接'},
    type: 'dropdown',
    path: '', // (OPTIONAL) dropdown can be routable too if you set a valid path
    children: [
      { label: 'Weibo', type: 'outgoing', link: 'http://weibo.com/myst729' },
      { label: 'GitHub', type: 'outgoing', link: 'https://github.com/myst729' },
      { label: 'StackOverflow', type: 'outgoing', link: 'https://stackoverflow.com/users/1032492' }
    ]
  }
],
```

- 列表中的条目可以是普通链接或下拉项目；
- 普通链接可跳转至站内页面或站外 URL；
- 下拉项目包含一个导航链接列表。如果设置了正确的路径，下拉项目也可以点击跳转；
- 导航链接标签也实现了多语言支持，更多信息请阅读[多语言支持](#/blog/docs/2017/multiple-languages-support)。

<!-- zh-CN:- -->

<!-- pt-BR:+ -->

Você pode customizar o menu de navegação sempre que precisar. Vamos dar uma olhada nas partes mais relevantes em `userdata/database.js`: 

```js
navigation: [
  {
    label: {'en-US': 'Guide', 'zh-CN': '指南'},
    type: 'category',
    path: '/blog/guide'
  },
  {
    label: {'en-US': 'About', 'zh-CN': '关于'},
    type: 'page',
    path: '/page/all-about-vuelog'
  },
  {
    label: {'en-US': 'Changelog', 'zh-CN': '变更日志'},
    type: 'page',
    path: '/page/changelog'
  },
  {
    label: {'en-US': 'Archive', 'zh-CN': '归档'},
    type: 'archive',
    path: '/archive'
  },
  {
    label: {'en-US': 'Links', 'zh-CN': '链接'},
    type: 'dropdown',
    path: '', // (OPTIONAL) dropdown can be routable too if you set a valid path
    children: [
      { label: 'Weibo', type: 'outgoing', link: 'http://weibo.com/myst729' },
      { label: 'GitHub', type: 'outgoing', link: 'https://github.com/myst729' },
      { label: 'StackOverflow', type: 'outgoing', link: 'https://stackoverflow.com/users/1032492' }
    ]
  }
],
```

- Cada item nessa lista ou é um link direto ou um dropdown.
- Um link direto pode redirecionar para uma rota dentro do site ou alguma outra URL.
- Um dropdown é apenas outra lista de links. Pode ser roteável também se você atribuir um caminho válido como outros links dentro do site. 
- As _labels_ nos Links de navegação suportam vários idiomas, por favor leia [Suporte a vários idiomas](#/blog/docs/2017/multiple-languages-support) para maiores informações.

<!-- pt-BR:- -->


<!-- es-MX:+ -->
Puedes personalizar el menú de navegación como sea necesario para ti. Veamos una parte relevante del archivo `userdata/database.js`


```js
navigation: [
  {
    label: {'en-US': 'Guide', 'zh-CN': '指南', 'es-Mx': 'Guía'},
    type: 'category',
    path: '/blog/guide'
  },
  {
    label: {'en-US': 'About', 'zh-CN': '关于', 'es-MX': 'Acerca de'},
    type: 'page',
    path: '/page/all-about-vuelog'
  },
  {
    label: {'en-US': 'Changelog', 'zh-CN': '变更日志', 'es-MX': 'Historial de cambios'},
    type: 'page',
    path: '/page/changelog'
  },
  {
    label: {'en-US': 'Archive', 'zh-CN': '归档', 'es-MX': 'Archivo'},
    type: 'archive',
    path: '/archive'
  },
  {
    label: {'en-US': 'Links', 'zh-CN': '链接', 'es-MX': 'Enlaces'},
    type: 'dropdown',
    path: '', // (OPTIONAL) dropdown can be routable too if you set a valid path
    children: [
      { label: 'Weibo', type: 'outgoing', link: 'http://weibo.com/myst729' },
      { label: 'GitHub', type: 'outgoing', link: 'https://github.com/myst729' },
      { label: 'StackOverflow', type: 'outgoing', link: 'https://stackoverflow.com/users/1032492' }
    ]
  }
],
```
- Cada item en la lista es un enlace simple, o una lista desplegable.
- Un enlace simple puede redirigir a una ruta del sitio, o bien un enlace externo.
- Una lista desplegable no es más que otra lista de enlaces. Tambien pueden apuntar a rutas del sitio si asignas una ruta válida.
- Las etiquetas de los menús soportan multiples idiomas, para más información puedes leer [Soporte multi idioma](#/blog/docs/2017/multiple-languages-support).


<!-- es-MX:- -->