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

    exclude: [
    
    ],

    // ============
    // Capabilities
    // ============

    maxInstances: 2,
    capabilities: [{
        'appium:deviceName': 'Samsung Galaxy S22',
        'appium:os_version': '12.0',
        'appium:automationName': 'UiAutomator2',
        platformName: 'Android',
        'appium:app': process.env.BROWSERSTACK_ANDROID,
        'appium:autoAcceptAlerts': true,
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 30000,
        'appium:browserstack.idleTimeout': '120',
        'appium:language': 'pt',
        'appium:locale': 'BR',  

        'bstack:options': {
        deviceName: 'Samsung Galaxy S22',
        osVersion: '12.0',
        projectName: 'WDIO Mobile',
        buildName: 'GitHub Actions',
        sessionName: 'Android App Test',
        idleTimeout: 120
        }
    }],

    // ===================
    // Test Configurations
    // ===================

    logLevel: 'error',

    
    // Default timeout for all waitFor* commands.

    waitforTimeout: 30000,
    
    // Default request retries count
    
    connectionRetryCount: 3,
    
    services: ['browserstack'],
    maxInstances: 1,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 240000,
        require: ['@babel/register']
    },
    
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false
    }]],
   
}