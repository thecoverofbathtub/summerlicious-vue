// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      .assert.elementCount('tbody > tr', 218)
      .end();
  }
};
