// A custom Nightwatch assertion.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.assert.outOfViewport(selector)
//
// for how to write custom assertions see
// http://nightwatchjs.org/guide#writing-custom-assertions
exports.assertion = function (selector) {
  this.message = 'Testing if element <' + selector + '> is out of viewport'
  this.expected = true
  this.pass = function (val) {
    return val === this.expected
  }
  this.value = function (res) {
    return res.value
  }
  this.command = function (cb) {
    var self = this
    return this.api.execute(function (selector) {
      var el = document.querySelector(selector)
      if (!el) {
        return null // can not find the element
      }
      var bounding = el.getBoundingClientRect()
      var viewport = document.body.getBoundingClientRect()
      if (bounding.right <= 0 ||
          bounding.left >= viewport.right ||
          bounding.bottom <= 0 ||
          bounding.top >= viewport.bottom) {
        return true
      }
      return false
    }, [selector], function (res) {
      cb.call(self, res)
    })
  }
}
