const Page = require('./page')

class privacy_notice{
    get pageTitle() {return $('.govuk-heading-l')}
    get pageContent() {return $('main')}


get pageTitle(){
    this.pageTitle.waitForDisplayed({})
    return (this.pageTitle).getText()
}

get checkPrivacynoticeContent(){
    this.pageContent.waitForDisplayed({})
    return (this.pageContent).getText()
}
}
module.exports = new privacy_notice()
