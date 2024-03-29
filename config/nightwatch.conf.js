const selenium = require('selenium-server-standalone-jar')
const chromedriver = require('chromedriver')

// Get the launchUrl from the argv,
// otherwise default to localhost:3000
let url = 'http://localhost:3000'
const urlIdx = process.argv.indexOf('--url')

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
      // filter: 'tests/invalid-search/index.js',
      launch_url: url,
      silent: true,
      disable_colors: false,
      screenshots: {
        enabled: true,
        path: 'reports/'
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
        acceptInsecureCerts: true,
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
