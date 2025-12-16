import HomeAndroidScreen from "./home.android.screen"
import HomeIosScreen from "./home.ios.screen"

export default class HomeScreen {

    getHomeScreen() {
        return driver.isAndroid ? new HomeAndroidScreen() : new HomeIosScreen()
    }
}