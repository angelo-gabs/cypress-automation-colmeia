class DashboardPage {

  // =========================================
  // Seletores da página
  // =========================================
  selectorsList = {

    // Elementos visuais da página
    pageAssets: {
      logo: '.justify-between',
      campaignTitle: '.ml-4'
    },

    // Botões de navegação e interação
    buttons: {
      userDropDown: ".gap-1",
      campaignPage: "[routerlink='/dashboard/campanha']",
      dataBasePage: "[href='/dashboard/campanha/bancos-de-dados']"
    }
  }


  // =========================================
  // Navegação
  // =========================================

  accessDashBoardPage() {
    cy.visit('/dashboard')
    this.verifyPage()
  }


  // =========================================
  // Métodos de clique
  // =========================================

  clickUserDropDownButton() {
    cy.get(this.selectorsList.buttons.userDropDown).click()
  }

  clickCampaignPageButton() {
    cy.get(this.selectorsList.buttons.campaignPage).click()
  }

  clickDataBaseButton() {
    this.checkCampaignExpanded()
    cy.get(this.selectorsList.buttons.dataBasePage).click()
  }


  // =========================================
  // Ações principais
  // =========================================

  acessDataBasePage() {
    this.clickCampaignPageButton()
    this.clickDataBaseButton()
  }


  // =========================================
  // Validações
  // =========================================

  verifyPage() {
    cy.get(this.selectorsList.pageAssets.logo)
  }

  checkCampaignExpanded() {
    cy.url().should('include', '/dashboard/campanha')
    cy.get(this.selectorsList.pageAssets.campaignTitle).should('be.visible')
  }

  checkCampaignCollapsed() {
    cy.url().should('not.include', '/campanha')
    cy.get(this.selectorsList.pageAssets.campaignTitle).should('be.not.visible')
  }

}

export default DashboardPage