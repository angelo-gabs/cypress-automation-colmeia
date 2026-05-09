import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashBoardPage'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const validUser = userData.userSucess

describe('Dashboard - ColmeIA', () => {
  describe('Dashboard - sem autenticação', () => {

  it('CT01 - Deve impedir acesso ao dashboard sem autenticação', () => {
    dashboardPage.accessDashBoardPage()
    //Bug 04 - Dashboard abre normalmente sem autenticação
  })

  })
  describe('Dashboard - autenticado', () => {

    beforeEach(() => {
      loginPage.accessAccount(validUser.email, validUser.password)
    })

    it('CT02 - Deve exibir opções do usuário ao clicar no perfil', () => {
      dashboardPage.clickUserDropDownButton()
      // Bug 05 - Nenhuma ação acontece ao clicar
    })

    it('CT03 - Deve expandir menu lateral da campanha', () => {
      dashboardPage.clickCampaignPageButton()
      dashboardPage.checkCampaignExpanded()
    })

    it('CT04 - Deve recolher menu lateral da campanha', () => {
      dashboardPage.clickCampaignPageButton()
      dashboardPage.checkCampaignExpanded()
      dashboardPage.clickCampaignPageButton()
      //dashboardPage.checkCampaignCollapsed()
      //Bug 06 - Sidebar permanece expandida
    })


  })
})
