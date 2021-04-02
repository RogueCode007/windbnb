require('./bootstrap');

import Vue from 'vue';
import App from './vue/app.vue';

const bus = new Vue();
const app = new Vue({
  el: '#app',
  components: { App }
})


export {bus};