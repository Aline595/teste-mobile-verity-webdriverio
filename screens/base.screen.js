import { timeout } from "../data/global/timeout.data"

export default class BaseScreen {

    async getTextElement(element, timeoutMessage, elementTimeout = timeout.default) {
        await element.waitForDisplayed({ timeoutMsg: timeoutMessage, timeout: elementTimeout })
        return await element.getText()
    }

    async getAttributeElement(element, timeoutMessage, attribute, elementTimeout = timeout.default) {
        await element.waitForDisplayed({ timeoutMsg: timeoutMessage, timeout: elementTimeout })
        return await element.getAttribute(attribute)
    }

    async setValueElement(element, timeoutMessage, value, elementTimeout = timeout.default) {
        await element.waitForDisplayed({ timeoutMsg: timeoutMessage, timeout: elementTimeout })
        await element.setValue(value)
    }

    async clickElement(element, timeoutMessage, elementTimeout = timeout.default) {
        await element.waitForDisplayed({ timeoutMsg: timeoutMessage, timeout: elementTimeout })
        await element.click()
    }

    async addValueElement(element, timeoutMessage, value, elementTimeout = timeout.default) {
        await element.waitForDisplayed({ timeoutMsg: timeoutMessage, timeout: elementTimeout })
        await element.clearValue()
        
        /**  
        * @param {platform} - Detecta se o teste está rodando para Android e ios
        * @param {toLowerCase} - Converte o nome da plataforma para letras minúsculas, garantndo consistência ao comparar em lógica condicional
        * @param {clearValue} - Garante que um campo de entra esteja limpo antes de inserir novos dados
        * @param {pause} - Pausa para evitar que o iOS pule caracteres 
        * 
        * Condicional criada, pois no simulador do iOS estava digitando muito rápido e pulando alguns caracteres
        */
        // const platform = await browser.capabilities.platformName.toLowerCase(); // iOS ou Android

        if (driver.isAndroid) {
           
            await element.setValue(value)
            
        } else {

            await element.clearValue()

            for (const char of value) {
                await element.addValue(char)
                await browser.pause(100) 
            }
        }
    }
}
