import BaseScreen from "../base.screen"
import { timeoutMsg } from "../../data/global/timeoutMessage.data"

export default class HomeAndroidScreen extends BaseScreen {

    get imgDemoApp() { return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]') }
    get lblWebdriver() { return $('//android.widget.TextView[@text="WEBDRIVER"]') }
    get imgIo() { return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[2]') }
    get lblDemoApp() { return $('//android.widget.TextView[@text="Demo app for the appium-boilerplate"]') }
    get imgApple() { return $(`//android.widget.TextView[@text="󰀵"]`) }
    get imgAndroid() { return $(`//android.widget.TextView[@text="󰀲"]`) }
    get lblSupport() { return $(`//android.widget.TextView[@text="Support"]`) }

    async getTextBtnHome() { 
        return await this.getTextElement(this.btnHome, timeoutMsg.home.msgBtnHome)
    }

    async clickBtnHome() {
        await this.clickElement(this.btnHome, timeoutMsg.home.msgBtnLogin)
    }

    async isDisplayedImgDemoApp() {
        return this.imgDemoApp.isDisplayed()
    }

    async getTextLblWebdriver() {
        return await this.getTextElement(this.lblWebdriver, timeoutMsg.home.msgLblWebdriver)
    }

    async isDisplayedImgIo() {
        return this.imgIo.isDisplayed()
    }

    async getTextLblDemoApp() {
        return await this.getTextElement(this.lblDemoApp, timeoutMsg.home.msgLblDemoApp)
    }

    async isDisplayedImgApple() {
        return this.imgApple.isDisplayed()
    }

    async isDisplayedImgAndroid() {
        return this.imgAndroid.isDisplayed()
    }

    async getTextLblSupport() {
        return await this.getTextElement(this.lblSupport, timeoutMsg.home.msgLblSupport)
    }

}