const Page = require('./page')
const fs = require('fs')

class map_PO{
    
    // 
    get openPage(){
  
        return browser.url('')
        }
    
    get title() {
        return $('h1')
    }

    get subheading(){
        return $("//div[@id='map-page']//p[@class='govuk-body-s']")
    }

    get headingFloodRisk(){
        return $("//label[normalize-space()='Flood risk']")
    }

    get floodRiskCombo(){
        return $('#map-selector')
    }

    get headingLocation(){
        return $("//label[normalize-space()='Location']")
    }

    get locationfield(){
        return $("//input[@id='location']")
    }

    get canvasmap(){
        return $("//canvas[@class='ol-unselectable']")
    }

    //surface water link elements(below map)
    get SWlinkHigh(){
        return $("//a[contains(text(),'High')]")
             
    }

    get SWlinkMedium(){
        //return $('[data-id=surface-water-medium]')
        return $("//a[contains(text(),'Medium')]")
    }

    get SWlinkLow(){
            return $("//a[contains(text(),'Low')]")
    }
    
    get SWlinkVLow(){
        return $("//a[contains(text(),'Very low')]")

    }
    //Rivers and Sea link elements(below map)
    get RSlinkHigh(){
        return $("//a[contains(text(),'High')]")
             
    }

    get RSlinkMedium(){
        return $("//a[contains(text(),'Medium')]")
    }

    get RSlinkLow(){
            return $("//a[contains(text(),'Low')]")
    }
    
    get RSlinkVLow(){
        return $("//a[contains(text(),'Very low')]")

    }
  
    //Rivers and Sea Risk details
    get RS_HighRiskText(){

        const data = fs.readFileSync('./test/specs/content_data/content_mapdata/RS_HighRisk.txt', 'utf8')
        return data
    }
    get RS_MediumRiskText(){

        const data = fs.readFileSync('./test/specs/content_data/content_mapdata/RS_MediumRisk.txt', 'utf8')
        return data
    }
    get RS_LowRiskText(){

        const data = fs.readFileSync('./test/specs/content_data/content_mapdata/RS_LowRisk.txt', 'utf8')
        return data
    }
    get RS_VLowRiskText(){

        const data = fs.readFileSync('./test/specs/content_data/content_mapdata/RS_VeryLowRisk.txt', 'utf8')
        return data
    }
    //Surface Water Risk details
    get extentfloodingtitle(){
        return $("div.govuk-body-s") 
    }
    get SW_HighRiskText(){

        const data = fs.readFileSync('./test/specs/content_data/content_mapdata/SW_HighRisk.txt', 'utf8')
        return data
    }
    get SW_MediumRiskText(){

        const data = fs.readFileSync('./test/specs/content_data/content_mapdata/SW_MediumRisk.txt', 'utf8')
        return data
    }
    get SW_LowRiskText(){

        const data = fs.readFileSync('./test/specs/content_data/content_mapdata/SW_LowRisk.txt', 'utf8')
        return data
    }
    get SW_VLowRiskText(){

        const data = fs.readFileSync('./test/specs/content_data/content_mapdata/SW_VeryLowRisk.txt', 'utf8')
        return data
    }

    get linkFloodriskInfoforLocationSearch()
    {
        return $("//a[contains(text(),'View the flood risk information for the location y')]")

    }

    get linkFloodriskInfoAnotherLocation()
    {
        return $("//a[contains(text(),'View the flood risk information for another locati')]")
    }
}
module.exports = new map_PO();