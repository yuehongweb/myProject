import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login';
import Home from '@/views/home';

Vue.use(VueRouter)
const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Home }
  ]
const router = new VueRouter({
    routes 
  })

export default router
