import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashBoardPage'
import DataBasePage from '../pages/dataBasePage'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const dataBasePage = new DataBasePage()

const validUser = userData.userSucess
const dataBaseNewItem = userData.dataBase.newItem
const dataBaseUnexistItem = userData.dataBase.unexistItem

describe('Data Base - ColmeIA', () => {

  beforeEach(() => {
    loginPage.accessAccount(validUser.email, validUser.password)
    dashboardPage.acessDataBasePage()
  })

  describe('Cenários sem item criado', () => {

    it('CT01 - Deve criar novo item no banco de dados', () => {
      dataBasePage.createDatabaseItem(dataBaseNewItem)
    })

    it('CT02 - Deve impedir criação de banco de dados com campo vazio', () => {
      dataBasePage.clickCreateDataBaseButton()
      dataBasePage.clickSaveDataBaseItemButton()
      dataBasePage.checkItemNameRequiredMsg()
    })

    it('CT03 - Deve impedir criação de banco de dados após múltiplas tentativas de salvar campo vazio', () => {
      dataBasePage.clickCreateDataBaseButton()
      dataBasePage.clickSaveDataBaseItemButton()
      dataBasePage.clickSaveDataBaseItemButton()

      //dataBasePage.checkItemNameRequiredMsg()
      //Bug - 
    })

  })


  describe('Cenários com item já criado no banco de dados', () => {

    beforeEach(() => {
      dataBasePage.createDatabaseItem(dataBaseNewItem)
    })

    it('CT04 - Deve manter o banco de dados após atualização da página', () => {
      dataBasePage.refreshPage()

      //dataBasePage.validateDatabaseItemCreated(dataBaseNewItem)
      //Bug - 
    })

    it('CT05 - Deve filtrar banco de dados existente pela barra de pesquisa', () => {
      dataBasePage.searchDataBaseItem(dataBaseNewItem)
      dataBasePage.validateDatabaseItemCreated(dataBaseNewItem)
    })

    it('CT06 - Deve retornar resultado vazio para pesquisa inexistente', () => {
      dataBasePage.searchDataBaseItem(dataBaseUnexistItem)
      dataBasePage.checkItemNotFoundMsg()
    })

    it('CT07 - Deve arquivar banco de dados e movê-lo para lista de arquivados', () => {
      dataBasePage.storeDatabaseItem(dataBaseNewItem)
      dataBasePage.clickStoredDatabaseButton()

      //dataBasePage.validateDatabaseItemCreated(dataBaseNewItem)
      //Bug - 
    })

    it('CT08 - Deve apagar banco de dados da listagem', () => {
      dataBasePage.deleteDatabaseItem(dataBaseNewItem)
    })

    it('CT09 - Deve remover todos os bancos de dados ao utilizar o botão de reset', () => {
      dataBasePage.clickResetDatabaseButton()
      dataBasePage.validateDatabaseReseted()
    })

  })

})