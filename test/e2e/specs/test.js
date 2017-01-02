// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Prepare': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    browser
      .url(browser.globals.devServerURL)
  },

  'Start': function (browser) {
    browser
      .waitForElementVisible('.vuelog', 5000)
      .assert.elementCount('.vuelog', 1)
  },

  'Home view': function (browser) {
    browser
      .assert.elementPresent('.header-wrap h1 img')
      .assert.elementPresent('.home')
      .assert.containsText('.home > h1', 'Vuelog')
      .assert.elementNotPresent('.vuelog > footer') // Home view does not show footer
  },

  'Archive view': function (browser) {
    browser
      .click('.header-menu > ul > li:nth-child(4) > a')
      .pause(1000)
      .assert.elementCount('.archive-body > h2', 3) // Archive default view has three sections
      .assert.elementPresent('.vuelog > footer')
      .click('.archive-body h4 a')
      .pause(1000)
      .assert.elementCount('.archive-body > h2', 1) // Archive by category view
      .assert.containsText('.archive-body > h2', 'Posts in category')
      .assert.elementPresent('.vuelog > footer')
      .assert.elementPresent('.vuelog > footer select')
  },

  'Post view': function (browser) {
    browser
      .click('.archive-body a:nth-child(1)')
      .pause(1000)
      .assert.elementCount('.content-body', 1)
      .assert.elementPresent('.content-body > h1.content-title')
      .assert.elementNotPresent('.content-body > h2.content-title')
      .assert.elementPresent('.content-body > h4.content-meta')
      .assert.elementPresent('.post > .comments')
      .assert.elementPresent('.post > .pagination')
      .assert.elementPresent('.vuelog > footer')
  },

  'Posts view': function (browser) {
    browser
      .click('.content-meta a')
      .pause(1000)
      .assert.elementCount('.content-body', 3) // 3 posts listed in the posts view
      .assert.elementNotPresent('.content-body > h1.content-title')
      .assert.elementPresent('.content-body > h2.content-title')
      .assert.elementPresent('.content-body > h4.content-meta')
      .assert.elementNotPresent('.comments')
      .assert.elementPresent('.posts > .pagination')
      .assert.elementPresent('.vuelog > footer')
  },

  'Page view': function (browser) {
    browser
      .click('.header-menu > ul > li:nth-child(2) > a')
      .pause(1000)
      .assert.elementCount('.content-body', 1)
      .assert.elementPresent('.content-body > h1.content-title')
      .assert.elementNotPresent('.content-body > h2.content-title')
      .assert.elementNotPresent('.content-body > h4.content-meta')
      .assert.elementPresent('.page > .comments')
      .assert.elementNotPresent('.pagination')
      .assert.elementPresent('.vuelog > footer')
  },

  'Oops view': function (browser) {
    browser
      .url(browser.globals.devServerURL + '/#/invalid-path')
      .pause(1000)
      .assert.elementPresent('.oops')
      .assert.containsText('.oops > h1', 'Oops!')
      .click('.oops > a')
      .pause(1000)
      .assert.elementPresent('.home') // get back to home view
  },

  'End': function (browser) {
    browser
      .end()
  }
}
