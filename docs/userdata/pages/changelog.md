title: Changelog (since v0.4.0)
------------------------------------
<!-- en-US:+ -->

<blockquote class="tip"><p>All notable changes to the Vuelog project after v0.4.0 are documented.</p></blockquote>

### 2.10.2 - 2017-06-23

#### Added
- Support custom marked options.

### 2.10.1 - 2017-04-07

#### Added
- Support end to end tests for Microsoft Edge on Windows 10.

### 2.10.0 - 2017-02-27

#### Changed
- Upgrade build tools to Webpack 2.2.1.
- Upgrade dependencies.

### 2.9.1 - 2017-01-30

#### Added
- Completed Chinese translation for docs.
- Support trimmed language list defined by user.

### 2.9.0 - 2017-01-26

#### Changed
- Rework docs.

### 2.8.0 - 2017-01-11

#### Added
- Support custom homepage.
- Support i18n for user content.
- Running tests and build on CircleCI.

### 2.7.1 - 2017-01-08

#### Changed
- Optimize production build size.
- Introduce webpack bundle analyzer plugin for build process.
- Add geckodriver to run end to end tests in Firefox.

### 2.7.0 - 2017-01-07

#### Added
- Support multiple parts page/post pagination.

### 2.6.1 - 2017-01-05

#### Changed
- Style improvement.
- Production sourcemaps turned off.

### 2.6.0 - 2017-01-02

#### Added
- Build script for docs.

### 2.5.3 - 2016-12-31

#### Fixed
- Incorrect meaningful time transforming.

#### Added
- Support page/post drafts.
- End to end tests.

### 2.5.2 - 2016-12-05

#### Added
- Unit tests for helpers.

#### Changed
- Unit tests for vuex store to achieve 100% branch coverage.

#### Fixed
- Incorrect translations when deep linking with locale in URL.

### 2.5.1 - 2016-12-01

#### Added
- Unit tests for vuex store.

### 2.5.0 - 2016-11-23

#### Changed
- Refactor i18n functionality.

### 2.4.0 - 2016-11-20

#### Changed
- Upgrade dependencies and fix bugs.

### 2.3.1 - 2016-11-16

#### Changed
- Make `database.js` more clear.

### 2.3.0 - 2016-11-13

#### Added
- Integrate with IntenseDebate and LiveRe.

### 2.2.0 - 2016-11-09

#### Added
- Integrate with Disqus.

### 2.1.3 - 2016-11-02

#### Fixed
- Sometimes click backdrop won’t dismiss side menu on mobile devices.

### 2.1.2 - 2016-11-01

#### Added
- Support dynamically switch language.

### 2.1.1 - 2016-11-01

#### Added
- Site brand in side menu on mobile devices.

### 2.1.0 - 2016-11-01

#### Added
- Internationalization supported now.

#### Changed
- Adopt system built-in fonts instead of web fonts.

### 2.0.4 - 2016-10-31

#### Added
- Dropdown navigation parent can be linkable now.
- Unfinished async requests will be cancelled before leave the page.

### 2.0.3 - 2016-10-21

#### Changed
- Remove vue-resource from dependencies.

### 2.0.2 - 2016-10-21

#### Fixed
- Links opened in new tab got 404 error if site is not served under domain root.

### 2.0.1 - 2016-10-20

#### Fixed
- Error parsing $vm data before route to oops view.
- Side menu layout issue when scroll document body.
- Links opened in new tab got 404 error.
- Post excerpt parse error.

### 2.0.0 - 2016-10-20

#### Changed
- Adopt Vue.js 2.x, rewrite with lots of breaking changes.

### 0.4.1 - 2016-09-05

#### Fixed
- Phishing vulnerability of outgoing links.

### 0.4.0 - 2016-04-15

#### Added
- User guide.

<!-- en-US:- -->

<!-- zh-CN:+ -->

<blockquote class="tip"><p>Vuelog 项目 v0.4.0 以后主要的变更都记录在此。</p></blockquote>

### 2.10.2 - 2017-06-23

#### 新增
- 支持自定义 marked 选项。

### 2.10.1 - 2017-04-07

#### 新增
- 支持 Windows 10 系统 Microsoft Edge 的端到端测试。

### 2.10.0 - 2017-02-27

#### 变更
- 升级构建工具至 Webpack 2.2.1；
- 升级依赖。

### 2.9.1 - 2017-01-30

#### 新增
- 完整的中文版文档；
- 支持用户定义的语言列表。

### 2.9.0 - 2017-01-26

#### 变更
- 重新编写写文档。

### 2.8.0 - 2017-01-11

#### 新增
- 自定义首页；
- 用户内容多语言支持；
- 集成 CircleCI 自动化构建。

### 2.7.1 - 2017-01-08

#### 变更
- 优化生成环境构建尺寸；
- 构建过程引入 Webpack 打包分析插件；
- 添加 Firefox 端到端测试所需的 geckodriver。

### 2.7.0 - 2017-01-07

#### 新增
- 支持文章/页面内容分页。

### 2.6.1 - 2017-01-05

#### 变更
- 改善样式；
- 关闭生产环境构建的 sourcemap。

### 2.6.0 - 2017-01-02

#### 新增
- 文档构建脚本。

### 2.5.3 - 2016-12-31

#### 修复
- 错误的时间转换。

#### 新增
- 支持文章/页面草稿；
- 端到端测试。

### 2.5.2 - 2016-12-05

#### 新增
- 辅助方法的单元测试。

#### 变更
- Vuex 全局状态单元测试的覆盖率达到 100%。

#### 修复
- 带语言参数的深度链接使用了翻译的错误。

### 2.5.1 - 2016-12-01

#### 新增
- Vuex 全局状态的单元测试。

### 2.5.0 - 2016-11-23

#### 变更
- 重构多语言功能。

### 2.4.0 - 2016-11-20

#### 变更
- 升级依赖，修复一些小问题。

### 2.3.1 - 2016-11-16

#### 变更
- 更新 `database.js` 注释。

### 2.3.0 - 2016-11-13

#### 新增
- 集成 IntenseDebate 和 LiveRe。

### 2.2.0 - 2016-11-09

#### 新增
- 集成 Disqus。

### 2.1.3 - 2016-11-02

#### 修复
- 在移动设备上点击背景有时不会收起侧边栏菜单。

### 2.1.2 - 2016-11-01

#### 新增
- 支持动态切换语言。

### 2.1.1 - 2016-11-01

#### 新增
- 站点名称自定义和移动设备侧边栏菜单。

### 2.1.0 - 2016-11-01

#### 新增
- 多语言支持。

#### 变更
- 移除 Web 字体，使用系统内置。

### 2.0.4 - 2016-10-31

#### 新增
- 导航菜单下拉项目支持可点击；
- 切换页面时取消未完成的异步请求。

### 2.0.3 - 2016-10-21

#### 变更
- 移除 vue-resource 依赖。

### 2.0.2 - 2016-10-21

#### 修复
- 站点未部署在域名根目录时，在新标签中打开页面出现 404 错误。

### 2.0.1 - 2016-10-20

#### 修复
- 跳转至 oops 视图前 $vm 数据解析错误；
- 页面滚动时侧边栏菜单布局问题；
- 在新标签中打开页面出现 404 错误；
- 文章摘要解析错误。

### 2.0.0 - 2016-10-20

#### 变更
- 使用 Vue.js 2.x 重写应用。

### 0.4.1 - 2016-09-05

#### 修复
- 外部链接遭受钓鱼攻击的风险。

### 0.4.0 - 2016-04-15

#### 新增
- 用户使用指南。

<!-- zh-CN:- -->
