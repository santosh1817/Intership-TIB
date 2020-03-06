import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//import VueRouter from 'vue-router'
import router from './router'
//import Home from './components/Home.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')