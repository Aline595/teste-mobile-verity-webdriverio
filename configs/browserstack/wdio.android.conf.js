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
        'appium:newCommandTimeout': 18000,
        'appium:browserstack.idleTimeout': '120',
        'appium:language': 'pt',
        'appium:locale': 'BR',  
    }],

    // ===================
    // Test Configurations
    // ===================

    logLevel: 'error',

    
    // Default timeout for all waitFor* commands.

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
        outputDir: 'report-android-browserstack',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
    }]],
   
}