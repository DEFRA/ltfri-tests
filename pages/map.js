module.exports = {
  url: function () {
    return this.api.launchUrl + '/map'
  },
  elements: {
    main: '#map-page',
    heading: '#map-page h1',
    mapContainer: '#map-page .map-container',
    riskAddressLink: '#map-page a[data-id="risk-address"]',
    mapSwitch: '#map-page .map-switch a',
    mobileNav: '#map-page select.govuk-select',
    zoomIn: '#map-page button.ol-zoom-in',
    zoomOut: '#map-page button.ol-zoom-out',
    enterFullscreen: '.ol-full-screen button',
    exitFullscreen: '.ol-full-screen button',
    RiversOrSea: '#map-page option#RiversOrSea',
    SurfaceWater: '#map-page option#SurfaceWater',
    Reservoirs: '#map-page option#Reservoirs',
    'RiversOrSea_1-ROFRS': '#map-page option#RiversOrSea_1-ROFRS',
    'RiversOrSea_2-FWLRSF': '#map-page option#RiversOrSea_2-FWLRSF',
    'SurfaceWater_6-SW-Extent': '#map-page option#SurfaceWater_6-SW-Extent',
    'SurfaceWater_9-SWDH': '#map-page option#SurfaceWater_9-SWDH',
    'SurfaceWater_12-SWVH': '#map-page option#SurfaceWater_12-SWVH',
    'SurfaceWater_8-SWDM': '#map-page option#SurfaceWater_8-SWDM',
    'SurfaceWater_11-SWVM': '#map-page option#SurfaceWater_11-SWVM',
    'SurfaceWater_7-SWDL': '#map-page option#SurfaceWater_7-SWDL',
    'SurfaceWater_10-SWVL': '#map-page option#SurfaceWater_10-SWVL',
    'Reservoirs_3-ROFR': '#map-page option#Reservoirs_3-ROFR',
    'Reservoirs_4-DOFR': '#map-page option#Reservoirs_4-DOFR',
    'Reservoirs_5-SOFR': '#map-page option#Reservoirs_5-SOFR'
  },
  commands: [{
    loadPageWithParams: function (addressId, easting, northing, mapType) {
      const url = this.api.launchUrl + '/map?address=' + addressId + '&easting=' + easting + '&northing=' + northing + (mapType ? '&map=' + mapType : '')
      return this.api.url(url)
    }
  }, {
    toggleDetailed: function () {
      return this.waitForElementVisible('@mapSwitch', 2000).click('@mapSwitch')
    }
  }, {
    selectMap: function (ref, isMobile) {
      if (isMobile) {
        return this.waitForElementVisible('@mobileNav', 2000).click('select option[value="' + ref + '"]')
      } else {
        return this.waitForElementVisible('@' + ref, 2000).click('@' + ref)
      }
    }
  }, {
    selectMapMobile: function (ref) {
      return this.waitForElementVisible('@mobileNav', 2000).click('select option[value="' + ref + '"]')
    }
  }, {
    isMobile: function (callback) {
      this.waitForElementVisible('@zoomIn', 10000)
        .isVisible('@mobileNav', function (result) {
          callback(result.value)
        })
    }
  }, {
    zoomIn: function (client, n) {
      const that = this
      this.waitForElementVisible('@zoomIn', 10000, function () {
        while (n > 0) {
          that.click('@zoomIn')
          client.pause(500)
          n--
        }
      })
    }
  }, {
    zoomOut: function (client, n) {
      const that = this
      this.waitForElementVisible('@zoomOut', 10000, function () {
        while (n > 0) {
          that.click('@zoomOut')
          client.pause(500)
          n--
        }
      })
    }
  }, {
    enterFullscreen: function () {
      const that = this
      this.waitForElementVisible('@enterFullscreen', 10000, function () {
        that.click('@enterFullscreen')
      })
    }
  }, {
    exitFullscreen: function () {
      const that = this
      this.waitForElementVisible('@exitFullscreen', 10000, function () {
        that.click('@exitFullscreen')
      })
    }
  }, {
    getTestData: function (client, callback) {
      client.execute(function () {
        return window.maps.testValues()
      }, function (result) {
        callback(result.value)
      })
    }
  }]
}
