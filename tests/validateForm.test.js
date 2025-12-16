import { assertChai, formScreen, menuScreen } from "../constants"

describe('Forms', function () {

    it('CT01 - Deve validar as labels da tela de "Forms".', async function () {

        await menuScreen.clickBtnForms()
        assertChai.equal(await menuScreen.getAttributeBtnForms(), 'Forms', 'A label "Forms" do menu de serviços está diferente do valor esperado!')
        assertChai.isTrue(await menuScreen.isSelectedBtnForms(), 'O botão "Forms" do menu de serviços não foi selecionado!')
        assertChai.equal(await formScreen.getTextLblInputField(), 'Input field:', 'A label "Input field" da tela de "Form" está diferente do valor esperado!')
        assertChai.equal(await formScreen.getTextLblTitleFormComponents(), 'Form components', 'A label "Form components" da tela de "Form" está diferente do valor esperado!')
        assertChai.equal(await formScreen.getTextLblSwitch(), 'Switch:', 'A label "Switch:" da tela de "Forms" está diferente do valor esperado!')
        assertChai.equal(await formScreen.getTextBtnActive(), 'Active', 'A label "Active" da tela de "Forms" está diferente do valor esperado!')
        assertChai.equal(await formScreen.getTextBtnInactive(), 'Inactive', 'A label "Inactive" da tela de "Forms" está diferente do valor esperado!')
        assertChai.equal(await formScreen.getTextLblButtons(), 'Buttons', 'A label "Buttons" da tela de "Forms" não foi exibida')

    })

    it('CT02 - Deve preencher o "Imput field" e validar a label "Click to turn the switch ON" da tela de "Forms".', async function () {

        await formScreen.addValueInpField('Aline')
        assertChai.equal(await formScreen.getTextLblYouHaveTyped(),'You have typed:', 'A label "You have typed:" está diferente do valor esperado!')
        assertChai.equal(await formScreen.getTextLblSwitchOn(), 'Click to turn the switch ON', 'A label "Click to turn the switch ON" da tela de "Forms" está diferente do valor esperado!')
       
    })
    
    it('CT03 - Deve validar o click na Feature Toggle e a label "Click to turn the switch OFF" da tela de "Forms".', async function () {

        await formScreen.clickBtnFeatureToggle()
        assertChai.equal(await formScreen.getTextLblSwitchOff(), 'Click to turn the switch OFF', 'A label "Click to turn the switch Off" da tela de "Forms" está diferente do valor esperado!')
        
    }) 

}) 

