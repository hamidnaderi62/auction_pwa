import Vue from 'vue'
import VueRouter from 'vue-router'

const AuctionPage = () => import( '../views/AuctionPage.vue')
const AuctionDetailPage = () => import( '../views/AuctionDetailPage.vue')
const MyAuctionPage = () => import( '../views/MyAuctionPage.vue')
const MyAuctionDetailPage = () => import( '../views/MyAuctionDetailPage.vue')
const AuctionCreatePage = () => import( '../views/AuctionCreatePage.vue')
const LoginPage = () => import( '../views/LoginPage.vue')

Vue.use(VueRouter)

const routes = [
  


  { path: '/auctionpage', name: 'auction-page', component: AuctionPage },
  { path: '/auctiondetailpage/:auction', name: 'auction-detail-page', component: AuctionDetailPage , props : true },
  { path: '/myauctionpage', name: 'my-auction-page', component: MyAuctionPage },
  { path: '/myauctiondetailpage/:auction', name: 'my-auction-detail-page', component: MyAuctionDetailPage , props : true },
  { path: '/auctioncreatepage', name: 'auction-create-page', component: AuctionCreatePage , props : true },
  { path: '/', name: 'login-page', component: LoginPage  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
