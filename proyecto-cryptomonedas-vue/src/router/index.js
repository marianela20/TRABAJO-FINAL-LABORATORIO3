import { createRouter, createWebHistory } from 'vue-router'
import LoginUsuario from '../views/LoginUsuario.vue'
import HomeCrypto from '../views/HomeCrypto.vue'

const routes = [
  {
    path: '/',
    name: 'LoginUsuario',
    component: LoginUsuario
  },
  {
    path: '/Home',
    name: 'HomeCrypto',
    component: HomeCrypto
  },
  //{
   // path: '/about',
   // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: function () {
     // return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    //}
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
