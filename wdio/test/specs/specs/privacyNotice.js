/* global browser, describe, it, expect */
const privacyNotice = require('../page_objects/privacy_notice')
const fs = require('fs')

describe('Check Privacy notice Content', async () => {
  it('Check page URL and Title', async () => {
    await browser.url('/privacy-notice')
    console.log(await browser.getTitle()) // Home page
    await browser.pause(5000)
    await expect(privacyNotice.pageContent).exist
    const privacynoticeWebpageContent = await privacyNotice.checkPrivacynoticeContent
    const privacyNoticeFile = await fs.readFileSync('./test/specs/content_data/privacyNotice.txt', 'utf8')
    console.log('file content', privacyNoticeFile)
    // This compare assertion works for comparing files and webpage//
    await expect(privacynoticeWebpageContent).toEqual(privacyNoticeFile)
  })
})
