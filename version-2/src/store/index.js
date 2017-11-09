/**
 * Created by Administrator on 2017/10/31.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import footer from './footer/footer'
import header from './header/header'
import content from './content/content'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    footer,
    header,
    content
  }
})
