const cookie_statement = require('../page_objects/cookie_statement')
const fs = require('fs')
const assert = require('assert')
const LTFRI_Homepage_PO = require('../page_objects/LTFRI_Homepage_PO')
 
describe('Check Privacy notice Content', async() =>
{
    it('Check page URL and Title', async() =>
{ 
    await browser.url('')
    await browser.setWindowSize(1800, 1200)
    console.log(await browser.getTitle()) //Home page
    await expect(LTFRI_Homepage_PO.cookieStatement).exist
    await LTFRI_Homepage_PO.cookieStatement.click()
    await browser.pause(5000)
    await expect(cookie_statement.pageContent).exist
    const cookiestatementWebpageContent = await cookie_statement.cookieStatementContent
    const cookiestatementFile = await fs.readFileSync('./test/specs/content_data/cookiestatement_latest.txt', 'utf8')

   // console.log(cookiestatementFile)
    // This compare assertion works for comparing files and webpage//
    await expect(cookiestatementWebpageContent).toEqual(cookiestatementFile)
})
})