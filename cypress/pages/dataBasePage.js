class DataBasePage {

  // =========================================
  // Seletores da página
  // =========================================
  selectorsList = {
    fields: {
      databaseItemName: "[placeholder='Nome do item']",
      databaseSearchBar: "[placeholder='Pesquisar']"
    },

    buttons: {
      createDatabaseItem: "[data-size='compact']",
      resetDatabaseItens: ':nth-child(2) > [variant="icon"]',
      saveDatabaseItem: '.fixed > .flex-col > .flex',
      storeDatabaseItem: "[title='Arquivar']",
      storeDatabaseSection: '.py-1 > :nth-child(1) > .justify-center',
      deleteDatabaseItem: "[title='Apagar']",
    },

    requiredMessages: {
      itemName: '.text-red-500',
      itemNotFound: 'tr > .text-center'
    },

    databaseItems: {
      itemRow: 'tbody tr'
    }
  }


  // =========================================
  // Métodos de clique
  // =========================================
  clickCreateDataBaseButton() {
    cy.get(this.selectorsList.buttons.createDatabaseItem).click()
  }

  clickSaveDataBaseItemButton() {
    cy.get(this.selectorsList.buttons.saveDatabaseItem).click()
  }

  clickStoredDatabaseButton() {
    cy.get(this.selectorsList.buttons.storeDatabaseSection).click()
  }

  clickResetDatabaseButton() {
    cy.get(this.selectorsList.buttons.resetDatabaseItens).click()
  }


  // =========================================
  // Captura de elementos
  // =========================================
  getDataBaseItemNameField() {
    return cy.get(this.selectorsList.fields.databaseItemName)
  }


  // =========================================
  // Ações principais
  // =========================================
  createDatabaseItem(itemName) {
    this.clickCreateDataBaseButton()
    this.getDataBaseItemNameField().type(itemName)
    this.clickSaveDataBaseItemButton()
    this.validateDatabaseItemCreated(itemName)
  }

  deleteDatabaseItem(itemName) {
    cy.contains(this.selectorsList.databaseItems.itemRow, itemName).within(() => {
      cy.get(this.selectorsList.buttons.deleteDatabaseItem).click()
    })

    this.validateDatabaseItemDeleted()
  }

  storeDatabaseItem(itemName) {
    cy.contains(this.selectorsList.databaseItems.itemRow, itemName).within(() => {
      cy.get(this.selectorsList.buttons.storeDatabaseItem).click()
    })
  }

  searchDataBaseItem(itemName) {
    cy.get(this.selectorsList.fields.databaseSearchBar).type(itemName)
  }

  refreshPage() {
    cy.reload()
  }


  // =========================================
  // Validações
  // =========================================
  validateDatabaseItemCreated(itemName) {
    cy.contains(this.selectorsList.databaseItems.itemRow, itemName).should('exist')
  }

  validateDatabaseItemDeleted(itemName) {
    cy.contains(this.selectorsList.databaseItems.itemRow, itemName).should('not.exist')
  }

  validateDatabaseItemStored(itemName) {
    cy.contains(this.selectorsList.databaseItems.itemRow, itemName).should('not.exist')
  }

  validateDatabaseReseted() {
    cy.contains(this.selectorsList.databaseItems.itemRow).should('not.exist')
  }

  checkItemNameRequiredMsg() {
    cy.get(this.selectorsList.requiredMessages.itemName)
  }

  checkItemNotFoundMsg() {
    cy.get(this.selectorsList.requiredMessages.itemNotFound)
  }

}

export default DataBasePage