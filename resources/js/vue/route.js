import Home from './home.vue';
import Example from './components/examplecomponent.vue'

export const routes = [
    // dynamic segments start with a colon
    { path: '/', component: Home },
    { 
     path: '/api/property/:id',
      name: 'property',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/showProperty.vue') 
    },
    { 
     path: '/example',
     component: Example 
    },
  ]
