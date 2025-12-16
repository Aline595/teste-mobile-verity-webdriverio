import { assert } from "chai"
import LoginScreen from "./screens/login/login.screen"
import MenuScreen from "./screens/menu/menu.screen"
import HomeScreen from "./screens/home/home.screen"
import FormScreen from "./screens/forms/form.screen"

export const assertChai = assert
export const loginScreen = new LoginScreen().getLoginScreen()
export const menuScreen = new MenuScreen().getMenuScreen()
export const homeScreen = new HomeScreen().getHomeScreen()
export const formScreen = new FormScreen().getFormScreen()
