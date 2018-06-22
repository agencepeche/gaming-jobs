import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Inscription1 from './views/Inscription1/Inscription1.vue'
import Inscription2 from './views/Inscription2/Inscription2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Inscription1
    },
    {
      path: '/inscription/profil',
      name: 'inscription_profil',
      component: Inscription2
    }
  ]
})
