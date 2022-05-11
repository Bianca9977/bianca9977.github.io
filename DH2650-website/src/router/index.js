import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage.vue'

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage
    }
]

const router = new VueRouter({
  routes
})

export default router
