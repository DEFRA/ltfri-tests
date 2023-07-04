/* global describe, it, browser, expect */
const cookieStatement = require('../page_objects/cookie_statement')
const fs = require('fs')
const postcodePO = require('../page_objects/postcode_PO')

describe('Check Privacy notice Content', async () => {
  it('Check page URL and Title', async () => {
    await browser.url('')
    await browser.setWindowSize(1800, 1200)
    console.log(await browser.getTitle()) // Home page
    await expect(postcodePO.cookieStatement).exist
    await postcodePO.cookieStatement.click()
    await browser.pause(5000)
    await expect(cookieStatement.pageContent).exist
    const cookiestatementWebpageContent = await cookieStatement.cookieStatementContent
    const cookiestatementFile = await fs.readFileSync('./test/specs/content_data/cookiestatement_latest.txt', 'utf8')

    // console.log(cookiestatementFile)
    // This compare assertion works for comparing files and webpage//
    await expect(cookiestatementWebpageContent).toEqual(cookiestatementFile)
  })
})
