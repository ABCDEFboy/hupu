/**
 * Created by Administrator on 2017/10/5.
 */
const state = {
  showType: ['nba'],
  nbaNews: [],
  chinaNewsFoot: [],
  internetFootNews: [],
  cbaNews: [],
  nbaGames: [],
  cbaGames: [],
  chinaGames: []
}

const getters = {
  showTypeing: state => state.showType[0],
  nbaNewsData: state => state.nbaNews,
  chinaNewsFootData: state => state.chinaNewsFoot,
  internetFootNewsData: state => state.internetFootNews,
  cbaNewsData: state => state.cbaNews,
  nbaGamesData: state => state.nbaGames,
  cbaGamesData: state => state.cbaGames,
  chinaGamesData: state => state.chinaGames
}
const mutations = {
  setShow (state, str) {
    state.showType = []
    state.showType.push(str)
  },
  setData (state, obj) {
    state[obj.str] = obj.data
    console.log(state.nbaNews)
  }
}
export default {
  state,
  getters,
  mutations
}
