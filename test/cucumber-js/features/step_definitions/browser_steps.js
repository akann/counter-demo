
const seleniumWebdriver = require('selenium-webdriver');
const {defineSupportCode} = require('cucumber');

const serverConfig = require('../../../../src/server/config.json');

defineSupportCode(function({Given, When, Then}) {
  Given('I can open browser', function() {
    return this.driver.get(`http://${serverConfig.server.host}:${serverConfig.server.port}`);
  });

  When('I click on {stringInDoubleQuotes}', function(text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  Then('I should see {stringInDoubleQuotes} on the page', function(text) {
    const xpath = "//*[contains(text(),'" + text + "')]";
    const condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
});
