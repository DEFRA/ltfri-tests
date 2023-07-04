/* global $ */
const Page = require('./page')

class CookieStatement extends Page {
  get pageContent () { return $('main') }

  get cookieStatementContent () {
    this.pageContent.waitForDisplayed({})
    return (this.pageContent).getText()
  }
}
module.exports = new CookieStatement()
