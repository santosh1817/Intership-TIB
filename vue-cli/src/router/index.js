import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import AddTour from '../components/AddTour';
import Tours from '../components/Tours'
import ToursHistory from '../components/ToursHistory'

export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tours/add',
        name: 'AddTour',
        component: AddTour

    },
    {
      path: '/tours/history',
      name: 'ToursHistory',
      component: ToursHistory

    },
    {
      path: '/tours',
      name: 'Tours',
      component: Tours

  }
  ]
});