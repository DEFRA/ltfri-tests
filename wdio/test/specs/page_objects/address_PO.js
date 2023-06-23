const Page = require('./page')

class address_PO {
    
    get heading()
    {
        return $('//h1')
    }

    get subHeading1()
    {
        return $("//p[contains(text(),'This service will tell you the flood risk of an ar')]")
    }

    get subHeading2()
    {
        return $("//p[contains(text(),'This service will tell you the flood risk of an ar')]")
    }
    get postcodeTitle()
    {
        return $("//span[@class='govuk-label']")
    }

    get postcode()
    {
        return $("p[class='govuk-body'] strong")
    }

    get postcodeChange()
    {
        return $("//a[normalize-space()='Change']")
    }
    
    get selectaddressTitle()
    {
       return $("//label[normalize-space()='Select an address']")
    }
    
    get addressCombo()
    {
       return $("//select[@id='address']")
    }
    
    get addressError()
    {
        return $("//p[@id='address-error']")
    }
    
    get addressContinueButton()
    {
      return $('button[type="submit"]')
    }

    }

module.exports = new address_PO();    