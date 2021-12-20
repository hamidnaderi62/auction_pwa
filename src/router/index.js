import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const HomePage = () => import( '../views/Home.vue')
const AboutPage = () => import( './../views/About.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
