import { assertChai, loginScreen } from "../constants"
import { menuScreen } from "../constants"

describe('Login', function () {

    it('CT06 - Deve validar o botão "Login".', async function () {

        await menuScreen.clickBtnLogin()
        assertChai.equal(await menuScreen.getAttributeBtnLogin(), 'Login', 'A label "Login" do menu de serviços está diferente do valor esperado!')
        assertChai.isTrue(await menuScreen.isSelectedBtnLogin(), 'O botão "Login" do menu de serviços não está selecionado!')
      
    })

    it('CT07 - Deve Validar as mensagens de erro ao deixar o email e o password em branco na tela de "Login".', async function() {

        await loginScreen.clickBtnloginForm()
        assertChai.equal(await loginScreen.getTextLblInformativeMessageEmail(), 'Please enter a valid email address', 'A label "Please enter a valid email address" está diferente do valor esperado!')
        assertChai.equal(await loginScreen.getTextLblInformativeMessagePassword(), 'Please enter at least 8 characters', 'A label "Please enter at least 8 characters" está diferente do valor esperado!')

    })

    it('CT08 - Deve Validar as labels da subtela de "Login" na tela de "Login".', async function () {

        await menuScreen.clickBtnLogin()
        assertChai.equal(await menuScreen.getAttributeBtnLogin(), 'Login', 'A label "Login" não foi exibido!')
        assertChai.equal(await loginScreen.getTextLblTitleLoginSignUpForm(), 'Login / Sign up Form', 'O título do cabeçalho está diferente do valor esperado!')
        assertChai.equal(await loginScreen.getTextLblSubTitleLogin(1), 'Login', 'A label "Login" está diferente do valor esperado!')  
        assertChai.equal(await loginScreen.getTextLblDescriptionLogin(), 'When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.', 'A label "When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login." está diferente do valor esperado!')      
        
    })

    it('CT09 - Deve validar os preenchimentos dos campos da tela de "Login".', async function() {

        await loginScreen.addValueInpEmailLogin('aline.as385@gmail.com')
        await loginScreen.addValueInpPasswordLogin('Aline12345')
        assertChai.equal(await loginScreen.getTextInpEmailLogin(), 'aline.as385@gmail.com', 'A label do input de "Login" está diferente do valor esperado!')
        assertChai.equal(await loginScreen.getTextInpPasswordLogin(), '••••••••••', 'A label do input de "Password" está diferente do valor esperado!')
        
    })

    it('CT10 - Deve validar as ações e os resultados esperados da subtela "Sign Up" na tela de "Login".', async function () {

        assertChai.equal(await loginScreen.getTextLblSubTitleSignUp(), 'Sign up', 'A label "Sign up" está diferente do valor esperado!')
        await loginScreen.clickBtnSubTitleSignUp()
        await loginScreen.addValueInpEmailSignUp('aaa@gmail.com')
        await loginScreen.addValueInpPasswordSignup('Aline12345')
        await loginScreen.addValueInpConfirmPasswordSignUp('Aline12345')
        assertChai.equal(await loginScreen.getTextInpEmailSignUp(), 'aaa@gmail.com', 'A label do input de "Login" está diferente do valor esperado!')
        assertChai.equal(await loginScreen.getTextInpPasswordSignUp(), '••••••••••', 'A label do input de "Password" está diferente do valor esperado!')
        assertChai.equal(await loginScreen.getTextInpConfirmPasswordSignUp(), '••••••••••', 'A label do input de "Confirm Password" está diferente do valor esperado!')
        
    })
})