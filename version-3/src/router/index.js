import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/Header/header'
import NewsDeatil from '../components/newsDeatil/newsDeatil'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/header', name: 'Header', component: Header},
    {path: '/newsDeatil', name: 'NewsDeatil', component: NewsDeatil}
  ]
})
