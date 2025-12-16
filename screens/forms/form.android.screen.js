import BaseScreen from "../base.screen"
import { timeoutMsg } from "../../data/global/timeoutMessage.data"

export default class FormAndroidScreen extends BaseScreen {

    get lblTitleFormComponents() { return $('//android.widget.TextView[@text="Form components"]') }
    get lblInputField() { return $('//android.widget.TextView[@text="Input field:"]') }
    get inpField() { return $('//android.widget.EditText[@content-desc="text-input"]') }
    get lblYouHaveTyped() { return $('//android.widget.TextView[@text="You have typed:"]') }
    get lblSwitch() { return $('//android.widget.TextView[@text="Switch:"]') }
    get btnFeatureToggle() { return $('//android.widget.Switch[@content-desc="switch"]') }
    get lblSwitchOn() { return $('//android.widget.TextView[@text="Click to turn the switch ON"]') }
    get lblSwitchOf() { return $('//android.widget.TextView[@text="Click to turn the switch OFF"]') }
    get lblButtons() { return $('//android.widget.TextView[@text="Buttons"]') }
    get btnActive() { return $('//android.widget.TextView[@text="Active"]') }
    get btnInactive() { return $('//android.widget.TextView[@text="Inactive"]') }

    async getTextLblTitleFormComponents() {
        return await this.getTextElement(this.lblTitleFormComponents, timeoutMsg.form.msgLblTitleFormComponents)
    }

    async getTextLblInputField() {
        return await this.getTextElement(this.lblInputField, timeoutMsg.form.msgLblInputField)
    }

    async addValueInpField(text) {
        await this.addValueElement(this.inpField, timeoutMsg.login.msgInputField, text)
    }

    async getTextLblYouHaveTyped() {
        return await this.getTextElement(this.lblYouHaveTyped, timeoutMsg.form.msgLblHaveTyped)
    }

    async getTextLblSwitch() {
        return await this.getTextElement(this.lblSwitch, timeoutMsg.form.msgLblSwitch)
    }    

    async clickBtnFeatureToggle() {
        await this.clickElement(this.btnFeatureToggle, timeoutMsg.form.msgBtnFeatureToggle)
    }

    async getTextLblSwitchOn() {
        return await this.getTextElement(this.lblSwitchOn, timeoutMsg.form.msgLblSwitchOn)
    }

    async getTextLblSwitchOff() {
        return await this.getTextElement(this.lblSwitchOf, timeoutMsg.form.msgLblSwitchOf)
    }    

    async getTextLblButtons() {
        return await this.getTextElement(this.lblButtons, timeoutMsg.form.msgLblButtons)
    }
    
    async getTextBtnActive() {
        return await this.getTextElement(this.btnActive, timeoutMsg.form.msgBtnActive)
    }

    async clickBtnActive() {
        await this.clickElement(this.btnActive, timeoutMsg.form.msgBtnActive)
    }

    async getTextBtnInactive() {
        return await this.getTextElement(this.btnInactive, timeoutMsg.form.msgBtnInactive)
    }

    async clickBtnInactive() {
        await this.clickElement(this.btnInactive, timeoutMsg.form.msgBtnInactive)
    }

}