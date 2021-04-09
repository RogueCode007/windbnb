require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './vue/app.vue';
import Home from './vue/home.vue';

Vue.use(VueRouter);
const bus = new Vue();
const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/', component: Home },
    { 
     path: '/property/:id',
      name: 'Property',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './vue/components/showProperty.vue') 
    },
  ],
  mode: 'history'
})
const app = new Vue({
  el: '#app',
  components: { App },
  router: router
})


export {bus};