require('babel-register')
var path = require('path')
var config = require('../../config')

// http://nightwatchjs.org/guide#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],
  custom_commands_path: ['test/e2e/custom-commands'],

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path,
      'webdriver.edge.driver': path.resolve(__dirname, 'node_modules/edgedriver/lib/edgedriver/MicrosoftWebDriver.exe'),
      'webdriver.gecko.driver': require('geckodriver').path
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        marionette: true,
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    phantomjs: {
      desiredCapabilities: {
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs-prebuilt').path,
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
