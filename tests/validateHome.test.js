import { assertChai, homeScreen, menuScreen} from "../constants"

describe('Home', function () {

    it('CT04 - Deve Validar as labels da tela da "Home".', async function () {
  
        assertChai.equal(await menuScreen.getAttributeBtnHome(), 'Home', 'A label "Home" do menu de serviços está diferente do valor esperado!')
        assertChai.isTrue(await menuScreen.isSelectedBtnHome(), 'O Botão "Home" do menu de serviços não foi selecionado!')
        assertChai.isTrue(await homeScreen.isDisplayedImgDemoApp(), 'A imagem "Home scren" da tela da "home" não foi exibida!')
        assertChai.equal(await homeScreen.getTextLblWebdriver(), 'WEBDRIVER', 'A label "WEBDRIVER" da tela da "Home" está diferente do valor esperado!' )
        assertChai.isTrue(await homeScreen.isDisplayedImgIo(), 'A imagem "I/O" da tela da "home" não foi exibida!')
        assertChai.equal(await homeScreen.getTextLblDemoApp(), 'Demo app for the appium-boilerplate', 'A label "Demo app for the appium-boilerplate da tela da "Home" está diferente do valor esperado!' )
        assertChai.isTrue(await homeScreen.isDisplayedImgIo(), 'A imagem "I/O" da tela da "home" não foi exibida!')
        assertChai.isTrue(await homeScreen.isDisplayedImgApple(), 'A imagem "Apple" da tela da "home" não foi exibida!')
        assertChai.isTrue(await homeScreen.isDisplayedImgApple(), 'A imagem "Android" da tela da "home" não foi exibida!')
        assertChai.equal(await homeScreen.getTextLblSupport(), 'Support', 'A label "Support" do menu de serviços está diferente do valor esperado!' )
    })

    it('CT05 - Deve Validar a ação de click no botão "Home".', async function () {

        await menuScreen.clickBtnLogin()
        await menuScreen.clickBtnHome()
        assertChai.equal(await menuScreen.getAttributeBtnHome(), 'Home', 'A label "Home" do menu de serviços está diferente do valor esperado!')
        assertChai.isTrue(await menuScreen.isSelectedBtnHome(), 'O Botão "Home" do menu de serviços não foi selecionado!')
        assertChai.isTrue(await homeScreen.isDisplayedImgDemoApp(), 'A imagem "Home scren" da tela da "home" não foi exibida!')

    })
})    