import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashBoardPage'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const validUser = userData.userSucess
const invalidUser = userData.userFailed

describe('Login - ColmeIA', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  })

  it('CT01 - Deve realizar login com credenciais válidas', () => {
    loginPage.fillEmailField(validUser.email)
    loginPage.fillPasswordField(validUser.password)
    loginPage.clickSubmitButton()
    
    //Bug 01 -Sistema informa falha no login, porém permite acesso a página de dashboard ao clicar no botão "Continuar"
    
    loginPage.clickContinueLoginButton()
    dashboardPage.verifyPage()
  })

  it('CT02 - Deve exibir erro com Email inválido', () => {
    loginPage.fillEmailField(invalidUser.email)
    loginPage.fillPasswordField(validUser.password)
    loginPage.clickSubmitButton()
    loginPage.checkInvalidCredentialsMsg()
  })

  it('CT03 - Deve exibir erro com senha inválida', () => {
    loginPage.fillEmailField(validUser.email)
    loginPage.fillPasswordField(invalidUser.password)
    loginPage.clickSubmitButton()
    loginPage.checkInvalidCredentialsMsg()
  })

  it('CT04 - Deve exibir erro com campo Email em branco', () => {
    loginPage.focusOutEmailField()
    loginPage.fillPasswordField(validUser.password)
    loginPage.checkEmptyEmailFieldMsg()
    loginPage.clickSubmitButton()
    loginPage.checkInvalidCredentialsMsg()
  })

  it('CT05 - Deve exibir erro com campo Password em branco', () => {
    loginPage.fillEmailField(validUser.email)
    loginPage.focusOutPasswordField()
    loginPage.checkEmptyPasswordFieldMsg()
    loginPage.clickSubmitButton()
    loginPage.checkInvalidCredentialsMsg()
  })

  it('CT06 - Deve direcionar usuário para recuperação de senha', () => {
    loginPage.clickForgotPasswordButton()
    //Bug 02 - Nenhuma ação acontece ao clicar
  })

})
