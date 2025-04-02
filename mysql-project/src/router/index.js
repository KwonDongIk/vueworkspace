import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerList from '@/views/CustomerList.vue'
import CustomerInfo from '@/views/CustomerInfo.vue'
import CustomerAdd from '@/views/CustomerAdd.vue'
import CustomerUpdate from '@/views/CustomerUpdate.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/customerList',
    name: 'customerlist',
    component: CustomerList
  },
  {
    path: '/customerInfo',
    name: 'customerInfo',
    component: CustomerInfo
  },
  {
    path: '/customerAdd',
    name: 'customeradd',
    component: CustomerAdd
  },
  {
    path: '/customerUpdate/:custId',
    name: 'customerupdate',
    component: CustomerUpdate
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
