// A custom Nightwatch command.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.setSelectValue(selector, value)
//
// for how to write custom commands see
// http://nightwatchjs.org/guide#writing-custom-commands
exports.command = function (selector, value) {
  var matchedOption = `${selector} option[value="${value}"]`
  this.click(matchedOption)
  return this
}
