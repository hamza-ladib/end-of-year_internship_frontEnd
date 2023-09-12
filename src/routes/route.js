import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import UserHomeView from '../views/UserHomeView.vue'
import ForgotPswdView from '../views/ForgotPswdView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import ResetPswdView from '../views/ResetPswdView.vue'
import CreateDemandeView from '../views/CreateDemandeView.vue'
import ContactView from '../views/ContactView.vue'
import SuccessVerification from '../views/SuccessVerification.vue'
import RegisterView from '../views/RegisterView.vue'  
import TestView from '../views/TestView.vue' 
import DemandeView from '../views/DemandeView.vue' 
import UpdateDemande from '../views/UpdateDemande.vue'
import UsersView from '../views/UsersView.vue'  
import CreateDmdForUser from '../views/CreateDmdForUser.vue'
import AddUserView from '../views/AddUserView.vue'
import RepresentantHome from '../views/RepresentantHome.vue'
import AddDecisionView from '../views/AddDecisionView.vue'
import SaveDemandesView from '../views/SaveDemandesView.vue'
import PresidentHomeView from '../views/PresidentHomeView.vue'
import AutorisationView from '../views/AutorisationView.vue'
import ConvocationView from '../views/ConvocationView.vue'
import MainLeveeView from '../views/MainLeveeView.vue'
import ServiceXHome from '../views/ServiceXHome.vue'
import AddCoordinateView from '../views/AddCoordinateView.vue'
import DossierRocolementView from '../views/DossierRocolementView.vue'
import AddDossierRocolement from '../views/AddDossierRocolement.vue'
import DemandMain from '../views/DemandMain.vue'
import AddDemandMain from '../views/AddDemandMain.vue'
import AllDecisionToDemand from '../views/AllDecisionToDemand.vue'
import HomeServiceTechnique from '../views/HomeServiceTechnique.vue'
import HomePatrimoinrView from '../views/HomePatrimoineView.vue'
import InviterCommissionView from '../views/InviterCommissionView.vue'
import Test from '../views/test.vue'
import Dashboard from '../views/dashboard.vue'

const routes = [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/forgot',
      name: 'forgotPswd',
      component: ForgotPswdView,
    },
    {
      path: '/adduser',
      name: 'addUserView',
      component: AddUserView,
    },
    {
      path: '/homeSTechnique',
      name: 'homeServiceTechnique',
      component: HomeServiceTechnique,
    },
    {
      path: '/homePatrimoin',
      name: 'homePatrimoinrView',
      component: HomePatrimoinrView,
    },
    {
      path: '/inviterCommission/:id',
      name: 'inviterCommissionView',
      component: InviterCommissionView,
      props: true,
    },
    {
      path: '/saveDemandes',
      name: 'saveDemandesView',
      component: SaveDemandesView,
    },
    {
      path: '/coordinate',
      name: 'serviceXHome',
      component: ServiceXHome,
    },
    {
      path: '/dossierRocolement',
      name: 'dossierRocolementView',
      component: DossierRocolementView,
    },
    {
      path: '/demandExamine/:id',
      name: 'allDecisionToDemand',
      component: AllDecisionToDemand,
    },
    {
      path: '/demandeMain',
      name: 'demandMain',
      component: DemandMain,
    },
    {
      path: '/addCoordinate/:id',
      name: 'addCoordinateView',
      component: AddCoordinateView,
      props: true
    },
    {
      path: '/addDossierRocolement/:id',
      name: 'addDossierRocolement',
      component: AddDossierRocolement,
      props: true
    },
    {
      path: '/addDemandMain/:id',
      name: 'addDemandMain',
      component: AddDemandMain,
      props: true
    },


    {
      path: '/autorisation',
      name: 'autorisationView',
      component: AutorisationView,
    },
    {
      path: '/convocation',
      name: 'convocationView',
      component: ConvocationView,
    },
    {
      path: '/mainlevee',
      name: 'mainLeveeView',
      component: MainLeveeView,
    },
    {
      path: '/profile',
      name: 'userProfile',
      component: UserProfileView,
    },
    {
      path: '/createDemande',
      name: 'createDemande',
      component: CreateDemandeView,
    },
    {
      path: '/contact',
      name: 'contactView',
      component: ContactView,
    },
    {
      path: '/verification',
      name: 'successVerif',
      component:SuccessVerification,
    },
    {
      path: '/users',
      name: 'usersView',
      component:UsersView,
    },
    {
      path: '/president',
      name: 'presidentHomeView',
      component:PresidentHomeView,
    },
    {
      path: '/',
      name: 'userHomeView',
      component: UserHomeView,
      props: true
    },
    {
      path: '/reset/:id',
      name: 'resetPswd',
      component: ResetPswdView,
      props: true
    },
    {
      path: '/createDemande/:id',
      name: 'createDmdForUser',
      component: CreateDmdForUser,
      props: true
    },
    {
      path: '/update/:id',
      name: 'updateDemande',
      component: UpdateDemande,
      props: true
    },
    {
      path: '/register',
      name: 'registerView',
      component:RegisterView,
    },
    {
      path: '/testView',
      name: 'testView',
      component:TestView,
    },
    {
      path: '/home',
      name: 'demandeView',
      component:DemandeView,
    },
    {
      path: '/notes',
      name: 'RepresentantHome',
      component:RepresentantHome,
    },
    {
      path: '/addDecision/:id',
      name: 'addDecisionView',
      component:AddDecisionView,
      props: true
    },
    {
      path: '/dashboardPresident',
      name: 'Dashboard',
      component:Dashboard,
      props: true
    },
  ]



const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
  
  