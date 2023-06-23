const config = require('../config')

module.exports = {
  url: function () {
    return this.api.launchUrl + '/postcode?captchabypass=' + config.friendlyCaptchaBypass
  },
  elements: {
    main: '#postcode-page',
    form: '#postcode-page form',
    h1: '.govuk-heading-xl',
    postcodeText: '#postcode',
    submitBtn: '#postcode-page form button[type=submit]',
    errorMessage: '#postcode-page #postcode-error'
  },
  commands: [{
    establishSession: function () {
      this.navigate()
      return this.waitForElementVisible('@main', 1000)
    },
    setPostcode: function (value) {
      return this.setValue('@postcodeText', value)
    },
    getErrorMessage: function () {
      return this.waitForElementVisible('@errorMessage', 1000)
        .click('@submitBtn')
    },
    submit: function () {
      return this.waitForElementVisible('@submitBtn', 1000)
        .click('@submitBtn')
    },
    setPostcodeAndSubmit: function (postcode) {
      return this
        .setPostcode(postcode)
        .submit()
    }
  }]
}
