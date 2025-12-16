import BaseScreen from "../base.screen"
import { timeoutMsg } from "../../data/global/timeoutMessage.data"
import { attributeList } from "../../data/global/attribute.data"

export default class MenuAndroidScreen extends BaseScreen {

    get btnHome() { return $('//android.view.View[@content-desc="Home"]') }
    get btnLogin() { return $('//android.view.View[@content-desc="Login"]') }
    get btnWebview() { return $('//android.view.View[@content-desc="Webview"]') }
    get btnForms() { return $('//android.view.View[@content-desc="Forms"]') }
    get btnSwipe() { return $('//android.view.View[@content-desc="Swipe"]') }
    get btnDrag() { return $('//android.view.View[@content-desc="Drag"]') }

    async isSelectedBtnHome() {
        return this.btnHome.isSelected()
    }

    async isSelectedBtnLogin() {
        return this.btnLogin.isSelected()
    }

    async isSelectedBtnWebview() {
        return this.btnWebview.isSelected()
    }

    async isSelectedBtnForms() {
        return this.btnForms.isSelected()
    }

    async isSelectedBtnSwipe() {
        return this.btnSwipe.isSelected()
    }

    async isSelectedBtnDrag() {
        return this.btnDrag.isSelected()
    }
    
    async getAttributeBtnHome() {
        return await this.getAttributeElement(this.btnHome, timeoutMsg.menu.msgBtnHome, attributeList.contentDesc)
    }

    async clickBtnHome() {
        await this.clickElement(this.btnHome, timeoutMsg.menu.msgBtnHome)
    }

    async getAttributeBtnLogin() {
        return await this.getAttributeElement(this.btnLogin, timeoutMsg.menu.msgBtnLogin, attributeList.contentDesc)
    }

    async clickBtnLogin() {
        await this.clickElement(this.btnLogin, timeoutMsg.menu.msgBtnLogin)
    }

    async getAttributeBtnWebview() {
        return await this.getAttributeElement(this.btnWebview, timeoutMsg.menu.msgBtnWebview, attributeList.contentDesc)
    }

    async clickBtnWebview() {
        await this.clickElement(this.btnWebview, timeoutMsg.menu.msgBtnWebview)
    }

    async getAttributeBtnForms() {
        return await this.getAttributeElement(this.btnForms, timeoutMsg.menu.msgBtnForms, attributeList.contentDesc)
    }

    async clickBtnForms() {
        await this.clickElement(this.btnForms, timeoutMsg.menu.msgBtnForms)
    }

    async getAttributeBtnSwipe() {
        return await this.getAttributeElement(this.btnSwipe, timeoutMsg.menu.msgBtnSwipe, attributeList.contentDesc)
    }

    async clickBtnSwipe() {
        await this.clickElement(this.btnSwipe, timeoutMsg.menu.msgBtnSwipe)
    }

    async getAttributeBtnDrag() {
        return await this.getAttributeElement(this.btnDrag, timeoutMsg.menu.msgBtnDrag, attributeList.contentDesc)
    }

    async clickBtnDrag() {
        await this.clickElement(this.btnDrag, timeoutMsg.menu.msgBtnDrag)
    }
}
