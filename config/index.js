const path = require('path')

const config = {
  friendlyCaptchaBypass: '',

  loadCaptchaBypass: function () {
    const fs = require('fs')
    try {
      const rawdata = fs.readFileSync(path.join(__dirname, '/server.json'))
      const configValues = JSON.parse(rawdata)
      this.friendlyCaptchaBypass = configValues.friendlyCaptchaBypass
    } catch (error) {
      // Ignore errors. If there's no config file then we set a blank value
    }
  }
}

config.loadCaptchaBypass()

module.exports = config
