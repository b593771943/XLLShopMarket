import Router from 'vue-router'
import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('pages/home/home')
const Category = () => import('pages/category/category') 
const Cart = () => import('pages/cart/cart')
const Profile = () => import('pages/profile/profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

export default new Router({
  routes,
  mode: 'history'
})