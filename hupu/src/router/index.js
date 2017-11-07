import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/Header/header'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/header', name: 'Header', component: Header}
  ]
})
