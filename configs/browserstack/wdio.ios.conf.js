require("dotenv").config()

exports.config = {

    // ====================
    // Runner Configuration
    // ====================

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    // ==================
    // Specify Test Files
    // ==================

    specs: [
        './tests/**/**/*.js'
    ],

    // Patterns to exclude.

    exclude: [],

    // ============
    // Capabilities
    // ============

    maxInstances: 2,
    capabilities: [{
        'appium:deviceName': 'iPhone 12',
        'appium:os_version': '14',
        'appium:automationName': 'XCUITest',
        platformName: 'iOS',
        'appium:app': process.env.BROWSERSTACK_IOS,
        'appium:autoAcceptAlerts': true,
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 18000,
        'appium:browserstack.idleTimeout': '120',
        'appium:language': 'pt',
        'appium:locale': 'pt_BR',
    }],

    // ===================
    // Test Configurations
    // ===================

    logLevel: 'error',
    
    waitforTimeout: 18000,

    // Default request retries count

    connectionRetryCount: 3,
    
    services: ['browserstack'],
    

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 240000,
        require: ['@babel/register']
    },

    reporters: ['spec', ['allure', {
        outputDir: 'results-ios-browserstack',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
    }]],
  
}

