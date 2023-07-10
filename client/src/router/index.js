import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddOrder from '../views/AddOrder.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component : Login
    },
    {
      path: '/addOrder',
      name: 'addOrder',
      component : AddOrder
    }

  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.access_token
 if(to.name !== 'login' && !loggedIn){
    next({name : 'login'})
  }
  else if(to.name == 'login' && loggedIn){
    next({name : 'home'})
  }
  else {next()}
})


export default router
