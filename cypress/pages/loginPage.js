class LoginPage {

  // =========================================
  // Seletores da página
  // =========================================
  selectorsList = {

    // Campos de entrada
    fields: {
      email: '#email',
      password: '#password'
    },

    // Botões da página
    buttons: {
      submit: "[type='submit']",
      forgetPassword: '.text-primary',
      continue: "[type='button']"
    },

    // Mensagens de validação
    requiredMessages: {
      emailField: '.mt-1:eq(0)',
      passwordField: '.mt-1:eq(1)',
    }
  }


  // =========================================
  // Navegação
  // =========================================

  accessLoginPage() {
    cy.visit('/')
  }


  // =========================================
  // Preenchimento de campos
  // =========================================

  fillEmailField(email) {
    cy.get(this.selectorsList.fields.email).type(email)
  }

  fillPasswordField(password) {
    cy.get(this.selectorsList.fields.password).type(password)
  }


  // =========================================
  // Métodos de clique
  // =========================================

  clickSubmitButton() {
    cy.get(this.selectorsList.buttons.submit).click()
  }

  clickContinueLoginButton() {
    cy.get(this.selectorsList.buttons.continue).click()
  }

  clickForgotPasswordButton() {
    cy.get(this.selectorsList.buttons.forgetPassword).click()
  }


  // =========================================
  // Ações principais
  // =========================================

  accessAccount(email, password) {
    this.accessLoginPage()
    this.fillEmailField(email)
    this.fillPasswordField(password)
    this.clickSubmitButton()
    this.clickContinueLoginButton()
  }


  // =========================================
  // Validações
  // =========================================

  checkInvalidCredentialsMsg() {
    cy.get(this.selectorsList.requiredMessages.emailField)
      .should('contain', 'Usuário ou senha inválidos')

    cy.get(this.selectorsList.requiredMessages.passwordField)
      .should('contain', 'Usuário ou senha inválidos')
  }

  checkEmptyEmailFieldMsg() {
    cy.get(this.selectorsList.requiredMessages.emailField)
      .should('contain', 'Este campo é obrigatório')
  }

  checkEmptyPasswordFieldMsg() {
    cy.get(this.selectorsList.requiredMessages.emailField)
      .should('contain', 'Este campo é obrigatório')
  }


  // =========================================
  // Eventos de foco
  // =========================================

  focusOutEmailField() {
    cy.get(this.selectorsList.fields.email).click()
    cy.get('body').click(0, 0)
  }

  focusOutPasswordField() {
    cy.get(this.selectorsList.fields.password).click()
    cy.get('body').click(0, 0)
  }

}

export default LoginPage