const Page = require('./page')

class cookie_statement{
    get pageTitle() {return $('.govuk-heading-l')}
    get pageContent() {return $('main')}


get pageTitle(){
    this.pageTitle.waitForDisplayed({})
    return (this.pageTitle).getText()
}

get cookieStatementContent(){
    this.pageContent.waitForDisplayed({})
    return (this.pageContent).getText()
}
}
module.exports = new cookie_statement()
