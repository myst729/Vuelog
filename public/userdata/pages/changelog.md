title: Changelog (since v0.4.0)
------------------------------------
<blockquote class="tip"><p>All notable changes to the Vuelog project after v0.4.0 are documented.</p></blockquote>

### 2.15.0 - 2019-07-04

#### Changed
- Migrate build tools to @vue/cli

### 2.14.4 - 2019-06-15

#### Changed
- Update CircleCI config to 2.0

### 2.14.3 - 2018-06-01

#### Added
- Mexican Spanish translation.

### 2.14.2 - 2018-02-13

#### Changed
- Inline manifest chunk to save browser requests.

### 2.14.1 - 2018-02-11

#### Changed
- Fix example assets.

### 2.14.0 - 2018-01-06

#### Added
- Enable loading dependencies from CDN for production build.

#### Changed
- Use Prism instead of highlight.js for code syntax highlight.

### 2.13.0 - 2018-01-06

#### Changed
- Upgrade to the latest version of vuejs-templates/webpack.

### 2.12.1 - 2018-01-05

#### Changed
- Upgrade marked to version 0.3.9 due to security vulnerabilities.

### 2.12.0 - 2017-11-04

#### Added
- Make `document.title` configurable.

#### Changed
- Build ES2015 bundle to production.

### 2.11.1 - 2017-08-28

#### Changed
- Upgrade vue-i18n.

### 2.11.0 - 2017-08-20

#### Changed
- Clean up build process.

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
