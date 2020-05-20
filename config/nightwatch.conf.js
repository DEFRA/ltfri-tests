var selenium = require('selenium-server-standalone-jar')
var chromedriver = require('chromedriver')

// Get the launchUrl from the argv,
// otherwise default to localhost:3000
var url = 'http://localhost:3000/long-term-flood-risk'
var urlIdx = process.argv.indexOf('--url')

if (urlIdx > 1) {
  url = process.argv[urlIdx + 1]
}

console.info('url', url)

module.exports = {
  src_folders: [
    'tests'
  ],
  live_output: true,
  page_objects_path: 'pages',
  output_folder: 'reports',
  test_workers: true,
  selenium: {
    start_process: true,
    server_path: selenium.path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },
  test_settings: {
    default: {
      skiptags: 'map',
      // filter: 'tests/groundwater/index.js',
      launch_url: url,
      silent: true,
      disable_colors: false,
      screenshots: {
        enabled: false,
        path: ''
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            '--headless'
          ],
          w3c: false
        },
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
