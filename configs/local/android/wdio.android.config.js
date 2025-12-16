const path = require("path")
const { config } = require("../wdio.shared.config")

config.capabilities = [{
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Device',
    'appium:platformVersion': '12.0',
    platformName: 'Android',
    'appium:autoAcceptAlerts': true,
    'appium:noReset': false,
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 18000,
    'appium:language': 'pt',
    'appium:locale': 'BR',
    'appium:app': path.resolve('./apps/app-android.apk')
}]

config.reporters = ['spec', ['allure', {
    outputDir: 'results-android-local',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config
