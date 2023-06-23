const { expect, assert } = require('chai')

const postcode_PO = require('../page_objects/postcode_PO')

describe('Checking web elements for postcode page', async() =>
{
            
it('Open page URL and maximize window', async() =>
{ 
await browser.url('')
await browser.setWindowSize(1800, 1200)
const handles = await browser.getWindowHandles()

})

it('Check the title', async() =>
{
await expect(postcode_PO.title).exist
await console.log('Title', await postcode_PO.title.getText())
await assert.equal(await postcode_PO.title.getText(), 'Where do you want to check?', '')
})

it('Check the subheading', async() =>
{
await expect(postcode_PO.subHeading).exist
await console.log('Subheading', await postcode_PO.subHeading.getText())
await assert.equal(await postcode_PO.subHeading.getText(), 'This service will tell you the flood risk of an area, not a specific property.', '')
})

it('Check the postcodeHeading', async() =>
{
await expect(postcode_PO.postcodeHeading).exist
await console.log('post code Heading', await postcode_PO.postcodeHeading.getText())
await assert.equal(await postcode_PO.postcodeHeading.getText(), 'Enter a postcode')
})

it('Check the postcode textbox', async() =>
{
await expect(postcode_PO.postcodeTextbox).exist
})

it('Check the postcode hint', async() =>
{
await expect(postcode_PO.postcodeHint).exist
await console.log('postcode hint', await postcode_PO.postcodeHint.getText())
await assert.equal(await postcode_PO.postcodeHint.getText(),'for example, WA4 1AB')
})

it('Check the continue button', async() =>
{
await expect(postcode_PO.postCodePageContinueCommandButton).exist
})

it('Check the risk flooding link', async() =>
{
await expect(postcode_PO.royalMailPostcodeFinderLink).exist
})

it('Check the Royal mail link', async() =>
{
await expect(postcode_PO.viewMapAreasFloodingLink).exist
}) 

//Testing for negative scenario with error messages

it('Leave postcode blank Error message', async() =>
{
await expect(postcode_PO.postcodeTextbox.setValue(''))
await postcode_PO.postCodePageContinueCommandButton.click()
await expect(postcode_PO.postcodeError).exist
await assert.equal(await postcode_PO.postcodeError.getText(), 'Error:\nEnter a full postcode in England')
})

it('Enter an invalid format less than 4 postcode Error', async() =>
{
await expect(postcode_PO.postcodeTextbox.setValue('WA4'))
await postcode_PO.postCodePageContinueCommandButton.click()
await expect(postcode_PO.postcodeError).exist
await assert.equal(await postcode_PO.postcodeError.getText(), 'Error:\nEnter a full postcode in England')
})

/*Need fix as currently displaying an error*/
it('Enter an invalid format more than 6 postcode Error', async() =>
{
await expect(postcode_PO.postcodeTextbox.setValue('WA4 1ABZ'))
await postcode_PO.postCodePageContinueCommandButton.click()
await expect(postcode_PO.postcodeError).exist
await assert.equal(await postcode_PO.postcodeError.getText(), 'Error:\nEnter a full postcode in England')
await expect(postcode_PO.postcodeTextbox.setValue(''))
})

it('Enter an invalid postcode Error', async() =>
{
await expect(postcode_PO.postcodeTextbox.setValue('ZZZ ZZZ'))
await postcode_PO.postCodePageContinueCommandButton.click()
await expect(postcode_PO.postcodeError).exist
await assert.equal(await postcode_PO.postcodeError.getText(), 'Error:\nEnter a full postcode in England')
})

it('Enter special characters postcode Error', async() =>
{
await expect(postcode_PO.postcodeTextbox.setValue('£$% @~#*'))
await postcode_PO.postCodePageContinueCommandButton.click()
await expect(postcode_PO.postcodeError).exist
await assert.equal(await postcode_PO.postcodeError.getText(), 'Error:\nEnter a full postcode in England')
})

it('Enter only numbers postcode Error', async() =>
{
await expect(postcode_PO.postcodeTextbox.setValue('0123456789'))
await postcode_PO.postCodePageContinueCommandButton.click()
await expect(postcode_PO.postcodeError).exist
await assert.equal(await postcode_PO.postcodeError.getText(), 'Error:\nEnter a full postcode in England')
})
})
