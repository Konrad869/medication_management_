

const { join } = require('path');
const { constants } = require('karma');

module.exports = () => {
  return {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
       
        random: false,
       
        failFast: true,
       
        timeout: 5000
      },
      clearContext: false,
      captureConsole: true
    },
    coverageReporter: {
      dir: join(__dirname, './coverage/frontend'),
      subdir: '.',
      reporters: [
        { type: 'lcov' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: constants.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage'
        ]
      }
    },
    singleRun: true,
    restartOnFileChange: true
  };
};
