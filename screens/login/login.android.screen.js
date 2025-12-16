import BaseScreen from "../base.screen"
import { timeoutMsg } from "../../data/global/timeoutMessage.data"
import { attributeList } from "../../data/global/attribute.data"

export default class LoginAndroidScreen extends BaseScreen {

    get lblTitleLoginSignUpForm() { return $('//android.widget.TextView[@text="Login / Sign up Form"]') }
    set lblSubTitleLogin(position) { this._lblSubTitleLogin = $(`//android.widget.TextView[@text="Login"][${position}]`) } 
    get lblSubTitleLogin() { return this._lblSubTitleLogin }
    get inpEmailLogin() { return $('//android.widget.EditText[@content-desc="input-email"]') }
    get inpPasswordLogin() { return $('//android.widget.EditText[@content-desc="input-password"]') }
    get lblDescriptionLogin() { return $('//android.widget.TextView[@text="When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."]') }
    get btnLoginForm() { return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup') }
    get btnOk() { return $('//android.widget.Button[@text="OK"]') }
    get lblInformativeMessageEmail() { return $('//android.widget.TextView[@text="Please enter a valid email address"]') }
    get lblInformativeMessagePassword() { return $('//android.widget.TextView[@text="Please enter at least 8 characters"]') } 
    get lblSubTitleSignUp() { return $('//android.widget.TextView[@text="Sign up"]') }
    get inpEmailSignUp() { return $('//android.widget.EditText[@content-desc="input-email"]') }
    get inpPasswordSignup() { return $('//android.widget.EditText[@content-desc="input-password"]') }
    get inpConfirmPasswordSignUp() { return $('//android.widget.EditText[@content-desc="input-repeat-password"]') }
    get btnSignUp() { return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup') }

    async getTextLblTitleLoginSignUpForm() {
        return await this.getTextElement(this.lblTitleLoginSignUpForm, timeoutMsg.login.msgLblTitleLoginSignUpForm)
    }

    async getTextLblSubTitleLogin(position) {
        this.lblSubTitleLogin = position
        return await this.getTextElement(this.lblSubTitleLogin, timeoutMsg.login.msgLblTitleLog)
    }

    async addValueInpEmailLogin(email) {
        await this.addValueElement(this.inpEmailLogin, timeoutMsg.login.msgInputEmailLogin, email)
    }

    async getTextInpEmailLogin() {
        return await this.getTextElement(this.inpEmailLogin, timeoutMsg.login.msgInputEmailLogin)
    }

    async addValueInpPasswordLogin(password) {
        await this.addValueElement(this.inpPasswordLogin, timeoutMsg.login.msgInputPasswordLogin, password)
    }

    async getTextInpPasswordLogin() {
        return await this.getTextElement(this.inpPasswordLogin, timeoutMsg.login.msgInputPasswordLogin)
    }

    async getTextLblDescriptionLogin() {
        return await this.getTextElement(this.lblDescriptionLogin, timeoutMsg.login.msgLblDescriptionLogin)
    }

    async getAttributeLblBtnLoginForm() {
        return await this.getAttributeElement(this.btnLoginForm, timeoutMsg.login.msgBtnLoginForm, attributeList.contentDesc)
    }

    async clickBtnloginForm() {
        await this.clickElement(this.btnLoginForm, timeoutMsg.login.msgBtnLoginForm)
    }

    async clickBtnOk() {

        /*
        *Condicional criada no inuito de clicar no botão "Ok" apenas para o android, pois o iOS está clicando po default.
        Estratégia usada para não travar o cenário quando executar os testes.  
        */

        if (driver.isAndroid) {
            
            await this.clickElement(this.btnOk, timeoutMsg.login.msgBtnOk)

        } else {
            console.log('O botão OK não será clicado no iOS.')
       }
    }

    async getTextLblInformativeMessageEmail() {
        return await this.getTextElement(this.lblInformativeMessageEmail, timeoutMsg.login.msgLblInformativeMessageEmail)
    }

    async getTextLblInformativeMessagePassword() {
        return await this.getTextElement(this.lblInformativeMessagePassword, timeoutMsg.login.msgLblInformativeMessagePassword)
    }

    async getTextLblSubTitleSignUp() {
        return await this.getTextElement(this.lblSubTitleSignUp, timeoutMsg.login.msgLblSubTitleSignUp)
    }

    async clickBtnSubTitleSignUp() {
        await this.clickElement(this.lblSubTitleSignUp, timeoutMsg.login.msgLblSubTitleSignUp)
    }

    async addValueInpEmailSignUp(email) {
        await this.addValueElement(this.inpEmailSignUp, timeoutMsg.login.msgInputEmailSignUp, email)
    }

    async getTextInpEmailSignUp() {
        return await this.getTextElement(this.inpEmailSignUp, timeoutMsg.login.msgInputEmailSignUp)
    }

    async addValueInpPasswordSignup(password) {
        await this.addValueElement(this.inpPasswordSignup, timeoutMsg.login.msgInputPasswordSignup, password)
    }

    async getTextInpPasswordSignUp() {
        return await this.getTextElement(this.inpPasswordSignup, timeoutMsg.login.msgInputPasswordSignup)
    }

    async addValueInpConfirmPasswordSignUp(password) {
        await this.addValueElement(this.inpConfirmPasswordSignUp, timeoutMsg.login.msgInputConfirmPasswordSignUp, password)
    }

    async getTextInpConfirmPasswordSignUp(password) {
        return await this.getTextElement(this.inpConfirmPasswordSignUp, timeoutMsg.login.msgInputConfirmPasswordSignUp, password)
    }

    async getTextBtnSignUp() {
        return await this.getTextElement(this.btnSignUp, timeoutMsg.login.msgBtnSignUp)
    }

    async clickBtnSignUp() {
        await this.clickElement(this.btnSignUp, timeoutMsg.login.msgBtnSignUp)
    }
}
