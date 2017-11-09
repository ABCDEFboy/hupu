/**
 * Created by Administrator on 2017/10/5.
 */
const state = {
  witch: ['news']
}

const getters = {
  witching: state => state.witch[0]
}
const mutations = {
  witched (state, str) {
    state.witch = []
    state.witch.push(str)
  }
}
export default {
  state,
  getters,
  mutations
}
