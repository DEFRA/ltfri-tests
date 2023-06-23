const Page = require('./page')

class accessibility_stmt{
    get pageTitle() {return $('h1[class="gem-c-title__text govuk-heading-xl"]')}
    get pageContent() {return $('main')}


get pageTitle(){
    this.pageTitle.waitForDisplayed({})
    return (this.pageTitle).getText()
}

get checkAccessibilityContent(){
    this.pageContent.waitForDisplayed({})
    return (this.pageContent).getText()
}
}
module.exports = new accessibility_stmt()
