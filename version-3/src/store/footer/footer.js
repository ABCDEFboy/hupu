/**
 * Created by Administrator on 2017/10/5.
 */
const state = {
  show: ['gameNews']
}

const getters = {
  showing: state => state.show[0]
}
const mutations = {
  news (state, str) {
    state.show = []
    state.show.push(str)
    console.log(state.show[0])
  }
}
export default {
  state,
  getters,
  mutations
}
