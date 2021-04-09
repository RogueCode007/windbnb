require('./bootstrap');

import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router'
import { routes } from './vue/route';

Vue.use(VueRouter);
//Register Routes
const router = new VueRouter({
  routes, 
  mode: 'history',

})
const bus = new Vue();
const app = new Vue({
  el: '#app',
  components: { App },
  router
})


export {bus};