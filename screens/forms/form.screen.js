import FormAndroidScreen from "./form.android.screen"
import FormIosScreen from "./form.ios.screen"

export default class FormScreen {

    getFormScreen() {
        return driver.isAndroid ? new FormAndroidScreen() : new FormIosScreen()
    }
}