/* global $ */
const Page = require('./page')

class PostcodePO extends Page {
  get title () {
    return $('h1')
  }

  get subHeading () {
    return $("//p[contains(text(),'This service will tell you the flood risk of an ar')]")
  }

  get postcodeHeading () {
    return $("//label[normalize-space()='Enter a postcode']")
  }

  get postcodeHint () {
    return $('#postcode-hint')
  }

  get postcodeTextbox () {
    return $('#postcode')
  }

  get postcodeError () {
    return $('#postcode-error')
  }

  get postCodePageContinueCommandButton () {
    return $('#post-code-button')
  }

  get viewMapAreasFloodingLink () {
    return $("//a[@href='/map']")
  }

  get royalMailPostcodeFinderLink () {
    return $("//a[@href='http://www.royalmail.com/find-a-postcode']")
  }
}
module.exports = new PostcodePO()
