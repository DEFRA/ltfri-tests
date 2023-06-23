const postcode_PO = require('../page_objects/postcode_PO')
//const LTFRI_Homepage_PO = require('../page_objects/LTFRI_Homepage_PO')
const address_PO = require('../page_objects/address_PO')
const { expect, assert } = require('chai')


describe('Check Your Long Term Flood Risk, Address page', async() =>
{

it('Open the page and Enter the postcode', async() =>
{
await browser.url('')
const handles = await browser.getWindowHandles()
await browser.switchToWindow(handles[0])
await expect(postcode_PO.postcodeTextbox.setValue('WA41AB'))
await browser.pause(6000)
await expect(postcode_PO.postCodePageContinueCommandButton.click())
await browser.switchToWindow(handles[0])
await browser.pause(3000)
})

it('Check the title and URL of address page', async() =>
{
const handles = await browser.getWindowHandles()
await browser.switchToWindow(handles[0]) 
await expect(address_PO.heading).exist
await expect(address_PO.subHeading1).exist
await expect(address_PO.subHeading2).exist
browser.pause(3000)
})

it('Check the contents of the address page', async() =>
{
await expect(address_PO.postcodeTitle).exist
await expect(address_PO.postcode).exist
await expect(address_PO.postcodeChange).exist
await expect(address_PO.selectaddressTitle).exist
await expect(address_PO.addressCombo).exist
await expect(address_PO.addressContinueButton).exist
})

/**Checking the error message */
it('Do not select any address', async() =>
{
await address_PO.addressContinueButton.click()
await expect(address_PO.addressError).exist
await assert.equal(await address_PO.addressError.getText(), 'Error:\nSelect an address', '')
})

})